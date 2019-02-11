const db = require('../db/index.js');
const Promise = require('bluebird');
const https = require('https');
const _ = require('underscore');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs');

// Makes sure that the username and password given to it exist and are not falsy
const emptyCredentials = (req, res, username, password) => {
    if(!username || username.length < 1){
        res.json({message: 'No username sent', code: 'send_user'});
        return true;
    }

    if(!password || password.length < 1){
        res.json({message: 'No password sent', code: 'send_pass'});
        return true;
    }
}

const validateEvent = (name, location, date) => {
    return true;
}

const empty = (value) => {
    if(value == []){return true;}
    if(value == undefined){return true;}
    if(value.length == undefined){return true;}
    if(!value){return true;}
}

// Middleware to check if the user is logged in
module.exports.checkLoggedIn = (req, res, next) => {
    console.log('checking the cookie', req.headers, req.headers.authentication);

    if (typeof req.body.token !== 'undefined') {
        jwt.verify(req.body.token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                console.log('cookie failed authentication')
                res.sendStatus(403);
            } else {
                console.log('authenticated!');
                req.username = decoded.user.username;
                req.id = decoded.user.id;
                console.log(req.username);
                next();
            }
        });
    } else {
        console.log('no cookie')
        res.sendStatus(403);
    }
}

// Signs the user in with the token
module.exports.signinToken = (req, res) => {
    let { token } = req.body;
    console.log('signing in with: ', token);
    res.send(jwt.decode(token));
}

// Logs in the user to allow access to protected routes
module.exports.login = (req, res) => {
    // check for a username
    const username = _.escape(req.params.username);
    const password = _.escape(req.params.password);
    console.log(username, password);

    // Make sure that a username and password was sent
    if(emptyCredentials(req, res, username, password)){return;}

    db.query('SELECT * FROM `users` WHERE username = ?', [username], 
        (err, data) => {
            console.log(data);
            if(data && (data.length > 1 || data.length < 1)){
                // no data was found for the username
                res.json({message: 'Username not found', code: 'user_not_found'})
            } else{
                if(password === 'movienight' && data[0].password === 'movienight'){
                    // if we are logging in for the first time, prompt to change the password
                    // include an access hash that will not be valid outside of the same day
                    console.log(1);
                    res.json({message: 'Please change your password', code: 'change_pass', access: bcrypt.hashSync(username+'vrdoljak'+new Date().getDate())})
                    return;
                } else if(bcrypt.compareSync(password, data[0].password)){
                    // if good, send a token
                    const user = { username: data[0].username, id: data[0].id };
                    jwt.sign({ user }, process.env.JWT_SECRET, (err, token) => {
                        console.log(token);
                        res.json({token: token, code: 'success'});
                        return;
                    });
                } else{
                    // wrong password
                    res.json({message: 'Wrong password', code: 'wrong_password'});
                    return;
                }
            }
        }
    );
}

// Changes the password for a user
module.exports.changePassword = (req, res) => {
    const username = _.escape(req.body.username);
    const password = _.escape(req.body.password);
    const access = _.escape(req.body.access);

    console.log('changing password', req.body);
    if(emptyCredentials(req, res, username, password)){return;}

    let validAccess = bcrypt.compareSync(username+'vrdoljak'+new Date().getDate(), access);

    console.log(validAccess);

    // the access code is granted when logging in for the first time and prompted to change your password
    // if not used within the same day, you can't change the password
    // this method will allow a standalone change password story in the future
    if(!validAccess){
        res.json({message: 'You cannot change your password at this time. Please try again.', code: 'bad_access'});
        return;
    }

    db.query('SELECT * FROM `users` WHERE username = ?', [username], 
        (err, data) => {
            console.log(data);
            if(data && (data.length > 1 || data.length < 1)){
                // no data was found for the username
                res.json({message: 'Username not found', code: 'user_not_found'})
            } else{
                bcrypt.hash(password, null, null, function(err, hash) {
                    // change the password to the provided one
                    db.query('UPDATE `users` SET `password` = ? WHERE `id` = ?', [hash, data[0].id], (err, data) => {
                        console.log(data);
                        res.json({message: 'Successfully changed the password.', code: 'success'})
                    });
                });
            }
        }
    );
}

// Searches for a movie by the title
module.exports.searchMovie = (req, res) => {
    console.log('searching movie', req.params, req.body);
    if(req.params){
        const title = req.params.title;
        https.get('https://www.omdbapi.com/?apikey=fdff2a8f&type=movie&s='+title+'&page='+(req.params.page ? req.params.page : 1), (resp) => {
            let data = '';
    
            resp.on('data', (chunk) => {
                data += chunk;
            });
    
            resp.on('end', () => {
                console.log(JSON.parse(data));
                res.send(data);
            });
    
        }).on("error", (err) => {
            console.log("Error: " + err.message);
        });
    }
}

// Gets a particular movies details
module.exports.getMovie = (req, res) => {
    console.log('getting movie', req.params.imdbID);

    https.get('https://www.omdbapi.com/?apikey=fdff2a8f&type=movie&i='+req.params.imdbID, (resp) => {
        let data = '';

        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end', () => {
            console.log(JSON.parse(data));
            res.send(data);
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}

// Gets a list of the top voted movies 
module.exports.getMovies = (req, res) => {
    // if logged in, also include the votes of the user who is logged in,
    // so the front end will be able to display voting icons
    console.log('getting movies');
    
    db.query(
        "SELECT `mv`.*, `ev2`.`id` AS `event_id`, `ev2`.`date` AS `event_date`, `e2m`.`votes` AS `votes` "+
        "FROM `events` AS `ev2` "+
        "  INNER JOIN `events_movies` AS `e2m`  "+
        "    ON `e2m`.`events_id` = `ev2`.`id`  "+
        "  INNER JOIN `movies` AS `mv`  "+
        "    ON `mv`.`id` = `e2m`.`movies_id`  "+
        "WHERE `ev2`.`date` IN ( "+
        "  SELECT "+
        "    MIN(`ev`.`date`) AS `date` "+
        "  FROM `events` AS `ev`  "+
        "  WHERE `ev`.`date` > CURRENT_TIMESTAMP "+
        ");"
    , [], (err, data) => {
        console.log(err, data);
        res.send(data);
    })
}

// Gets a list of future events
module.exports.getEvents = (req, res) => {
    console.log('getting events');

    db.query(
        "SELECT * FROM `events` WHERE `date` > CURRENT_TIMESTAMP ORDER BY `date` ASC;"
    , [], (err, data) => {
        console.log(data);
        res.send(data);
    })

}

// Saves the movie to the db and allows it to be voted on by a user
module.exports.suggestMovie = (req, res) => {
    console.log('suggesting: ', req.body);
    db.query = Promise.promisify(db.query);

    let movie = req.body.movie, 
        event = req.body.event;

    // Check if the movie is already in the db
    db.query("SELECT * FROM `movies` WHERE `imdbID` = ?", [movie.imdbID])
        .then(response => {
            if(response.length > 1){
                return res.send({code: 'movies_error'});
            } else if(response.length == 1){
                // Movie does exist
                movie = response[0];
                
                // Check that the event exists
                db.query("SELECT * FROM `events` WHERE `id` = ?", [event.id])
                    .then((response) => {
                        if(response.length > 1){
                            return res.send({code: 'event_error'});
                        } else if(response.length == 1){
                            event = response[0];

                            // check to see if the movie has already been suggested
                            db.query("SELECT * FROM `events_movies` WHERE `events_id` = ? AND `movies_id` = ?", [event.id, movie.id])
                                .then((response) => {
                                    if(response.length > 0){
                                        return res.send({code: 'already_suggested'});
                                    }

                                    db.query("INSERT INTO `events_movies` (`movies_id`, `events_id`) VALUES (?, ?)", [movie.id, event.id])
                                        .then((response) => {
                                            res.send('Success');
                                        })
                                        .catch((err) => {
                                            res.status(403).send('Error: '+ err);
                                        })
                                })
                                .catch((err) => {
                                    res.status(403).send('Error: '+ err);
                                })

                        } else{
                            return res.send({code: 'no_event'});
                        }
                    })
                    .catch((err) => {
                        res.status(403).send('Error: '+ err);
                    })
            } else{
                // Movie does not exist, save it and then suggest it
                db.query("SELECT * FROM `events` WHERE `id` = ?", [event.id])
                    .then((response) => {
                        console.log('events', response);
                        if(response.length > 1){
                            return res.send({code: 'event_error'});
                        } else if(response.length == 1){
                            event = response[0];

                            // insert into our movies table
                            db.query("INSERT INTO `movies` (`imdbID`, `title`, `image_url`, `year`, `genre`, `description`, `created`, `created_by`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [
                                movie.imdbID, 
                                movie.Title, 
                                movie.Poster,
                                movie.Year, 
                                movie.Genre,
                                movie.Plot,
                                new Date(), 
                                req.id
                            ])
                                .then((response) => {
                                    console.log('after insert', response);


                                    db.query(
                                        "INSERT INTO `events_movies` (`events_id`, `movies_id`) "+
                                        "SELECT "+
                                        "    ? AS `events_id` "+
                                        "  , `m`.`id` AS `movies_id` "+
                                        "FROM `movies` AS `m` "+
                                        "WHERE `m`.`imdbID` = ? ", [event.id, movie.imdbID])

                                        .then((response) => {
                                            console.log(response);
                                            return res.send('Success');
                                        })
                                        .catch((err) => {
                                            console.log(err);
                                            return res.status(403).send('Error: '+ err);
                                        })

                                
                                })
                                .catch((err) => {
                                    console.log(err);
                                    return res.status(403).send('Error: '+ err);
                                })

                        } else{
                            return res.send({code: 'no_event'});
                        }
                    })
                    .catch((err) => {
                        return res.status(403).send('Error: '+ err);
                    })
            }
        })
        .catch((err) => {
            return res.status(403).send('Error: '+ err);
        });
}

// Allows a user to vote for a move to watch
module.exports.vote = (req, res) => {
    console.log('voting on: ', req.params.id);
}

// Creates a new event
module.exports.createEvent = (req, res) => {
    console.log('creating event: ', req.body);
    let { event_name, event_location, event_date } = req.body;
    let valid = validateEvent(event_name, event_location, event_date);

    if(valid){
        db.query = Promise.promisify(db.query);
        db.query("INSERT INTO `events` (`id`, `date`, `name`, `location`, `created`) VALUES (?, ?, ?, ?, ?)", [null, event_date, event_name, event_location, new Date()])
        .then(response => {
            console.log(response);
            res.send({success: 1});
        })
        .catch(err => {
            console.log(error);
            res.send({error: 1})
        })
    }
}