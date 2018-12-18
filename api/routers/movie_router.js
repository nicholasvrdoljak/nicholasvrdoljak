const router = require('express').Router();
const controller = require('../controllers/movie_controller.js');

// Login
router.post('/login/:username/:password', controller.login);

// Change password
router.post('/changepassword', controller.changePassword);

// Sign in with token
router.post('/signintoken', controller.signinToken);

// Search by title
router.get('/searchmovie/:title/:page', controller.searchMovie);

// Get movie by imdb id
router.get('/getmovie/:imdbID', controller.getMovie);

// Get movies listing
router.get('/getmovies', controller.getMovies);

// Get events list
router.get('/getevents', controller.getEvents);



// Protected routes below!
router.use(controller.checkLoggedIn);

// Suggest movie for voting
router.post('/suggestmovie', controller.suggestMovie);

// Vote on a movie
router.post('/vote/:id', controller.vote);


module.exports = router;