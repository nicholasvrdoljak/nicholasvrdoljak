const db = require('./db/index.js');
const Promise = require('bluebird');
const https = require('https');

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

module.exports.suggestMovie = (req, res) => {
    console.log('suggesting: ', req.params.imdbID);
}

module.exports.vote = (req, res) => {
    console.log('voting on: ', req.params.id);
}

// module.exports.signIn = (req, res) => {
    // console.log('signIn', req.params);
//     db.query('SELECT * FROM users WHERE username = ?', [req.params.username], (err, data) => {
//         if (data.length) {
//             // compares the password hashes for equality, and sends the JWT if matching
//             bcrypt.compareAsync(req.params.password, data[0].password)
//                 .then(response => {
//                     if (response) {
//                         const user = {
//                             id: data[0].id,
//                             username: data[0].username,
//                         };
//                         jwt.sign({ user }, process.env.JWT_SECRET, (err, token) => {
//                             if (!err) { 
//                                 res.json({ user, token });
//                             }
//                         });
//                     } else {
//                         res.send('wrong_pass');
//                     }
//                 })
//                 .catch(err => {
//                     res.status(404).send('Request failed', err);
//                 });
//         } else {
//             // sends a string for wrong username if no data returns from the DB
//             res.send('wrong_user');
//         }
//     });
// }