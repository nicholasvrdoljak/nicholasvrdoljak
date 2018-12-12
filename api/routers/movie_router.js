const router = require('express').Router();
const controller = require('../controllers/movie_controller.js');

// Login
router.post('/login/:username/:password', controller.login);

// Change password
router.post('/login/:username/:password/:access', controller.changePassword);

// Search by title
router.get('/searchmovie/:title', controller.searchMovie);

// Get movie by imdb id
router.get('/getmovie/:imdbID', controller.getMovie);

// Protected routes below!
router.use(controller.checkLoggedIn);

// Suggest movie for voting
router.post('/suggestmovie/:imdbID', controller.suggestMovie);

// Vote on a movie
router.post('/vote/:id', controller.vote);




module.exports = router;