const router = require('express').Router();
const controller = require('./controller.js');

// Search by title
router.get('/movienight/searchmovie/:title', controller.searchMovie);

// Get movie by imdb id
router.get('/movienight/getmovie/:imdbID', controller.getMovie);

// Suggest movie for voting
router.get('/movienight/suggestmovie/:imdbID', controller.suggestMovie);

// Vote on a movie
router.get('/movienight/vote/:id', controller.vote);




module.exports = router;