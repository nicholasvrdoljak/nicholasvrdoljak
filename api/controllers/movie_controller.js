const db = require('../db/index.js');
const Promise = require('bluebird');
const https = require('https');
const _ = require('underscore');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs');

// Makes sure that the username and password given to it exist and are not falsy
emptyCredentials = (req, res, username, password) => {
    if(!username || username.length < 1){
        res.json({message: 'No username sent', code: 'send_user'});
        return true;
    }

    if(!password || password.length < 1){
        res.json({message: 'No password sent', code: 'send_pass'});
        return true;
    }
}

// Middleware to check if the user is logged in
module.exports.checkLoggedIn = async (req, res, next) => {
    console.log('checking the cookie', req.headers, req.headers.authentication);

    if (typeof req.headers.authentication !== 'undefined') {
        jwt.verify(req.headers.authentication, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                console.log('cookie failed authentication')
                res.sendStatus(403);
            } else {
                console.log('authenticated!');
                req.username = decoded.user.username;
                console.log(req.username);
                next();
            }
        });
    } else {
        console.log('no cookie')
        res.sendStatus(403);
    }
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
                    const user = { username: data[0].username };
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
        https.get('https://www.omdbapi.com/?apikey=fdff2a8f&type=movie&s='+title, (resp) => {
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

    db.query(
        "SELECT  "+
        "   `mv`.* "+
        "  , `ev`.`date` AS `event_date` "+
        "  , `e2m`.`votes` AS `votes` "+
        "FROM `events` AS `ev`  "+
        "  INNER JOIN `events_movies` AS `e2m`  "+
        "    ON `e2m`.`events_id` = `ev`.`id`  "+
        "  INNER JOIN `movies` AS `mv`  "+
        "    ON `mv`.`id` = `e2m`.`movies_id`  "+
        "WHERE `ev`.`date` > CURRENT_TIMESTAMP "+
        "ORDER BY `e2m`.`votes` DESC  "+
        ";"
    , [], (err, data) => {
        console.log(data);
        res.json(data);
    })
}

// Saves the movie to the db and allows it to be voted on by a user
module.exports.suggestMovie = (req, res) => {
    console.log('suggesting: ', req.params.imdbID);
}

// Allows a user to vote for a move to watch
module.exports.vote = (req, res) => {
    console.log('voting on: ', req.params.id);
}