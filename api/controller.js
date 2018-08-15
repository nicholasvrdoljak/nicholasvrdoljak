const db = require('./db/index.js');
const Promise = require('bluebird');

// module.exports.getGame = (req, res) => {
//     console.log(req.params);
//     res.send('cool game brah');
// }

// module.exports.getTrends = (req, res) => {
//     console.log(req.params);
//     res.send('sweet trends bruh');
// }

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