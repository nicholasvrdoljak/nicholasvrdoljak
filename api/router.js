const router = require('express').Router();
const controller = require('./controller.js');

// router.get('/gameQuery/:game', controller.getGame);
// router.get('/trends', controller.getTrends);
// router.get('/signInToken', account.signInToken);
// router.post('/newAccount', account.newAccount);
router.get('/images', controller.getImages);

module.exports = router;