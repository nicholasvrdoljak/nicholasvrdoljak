const db = require('../db/index.js');
const Promise = require('bluebird');
const https = require('https');
const _ = require('underscore');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs');

// Makes sure that the username and password given to it exist and are not falsy
checkCredentials = (req, res, username, password) => {
    if(!username || username.length < 1){
        res.json({message: 'No username sent', code: 'send_user'});
        return false;
    }

    if(!password || password.length < 1){
        res.json({message: 'No password sent', code: 'send_pass'});
        return false;
    }
}

// Middleware to check if the user is logged in
module.exports.checkLoggedIn = async (req, res, next) => {
    console.log('checking the cookie');

    if (typeof req.headers.cookie !== 'undefined') {
        req.token = req.headers.cookie.split('; ')
        if (req.token.length === 1) {
            req.token = req.token[0].slice(1, -1);
        } else {
            req.token = req.token[2].slice(1, -1);
        }
        
        jwt.verify(req.token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                console.log('cookie failed authentication')
                res.sendStatus(403);
            } else {
                console.log('authenticated!');
                req.username = decoded.user.username;
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
    if(!checkCredentials(req, res, username, password)){return;}

    db.query('SELECT * FROM `users` WHERE username = ?', [username], 
        (err, data) => {
            console.log(data);
            if(data && (data.length > 1 || data.length < 1)){
                // no data was found for the username
                res.json({message: 'Username not found', code: 'user_not_found'})
            } else{
                if(password === 'jansmovienight' && data[0].password === 'jansmovienight'){
                    // if we are logging in for the first time, prompt to change the password
                    // include an access hash that will not be valid outside of the same day
                    res.json({message: 'Please change your password', code: 'change_pass', access: bcrypt.hashSync(username+'vrdoljak'+new Date().getDate())})
                    return;
                } else if(bcrypt.compareSync(password, data[0].password)){
                    // if good, send a token
                    const user = { username: data[0].username };
                    jwt.sign({ user }, process.env.JWT_SECRET, (err, token) => {
                        res.json(token);
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
    const username = _.escape(req.params.username);
    const password = _.escape(req.params.password);
    const access = _.escape(req.params.access);

    if(!checkCredentials(req, res, username, password)){return;}

    let validAccess = bcrypt.compareSync(username+'vrdoljak'+new Date().getDate(), access);

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
                    db.query('UPDATE `users` SET `password` = ? WHERE `id` = ?', ['hash', data[0].id], (err, data) => {
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
    console.log('searching movie', req.params);

    https.get('https://www.omdbapi.com/?apikey=fdff2a8f&type=movie&s='+req.params.title, (resp) => {
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

// Saves the movie to the db and allows it to be voted on by a user
module.exports.suggestMovie = (req, res) => {
    console.log('suggesting: ', req.params.imdbID);
}

// Allows a user to vote for a move to watch
module.exports.vote = (req, res) => {
    console.log('voting on: ', req.params.id);
}