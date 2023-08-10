const Router = require('express');
const router = new Router();
const tokenUpdMiddleware = require('../../middlewares/tokenUpdMiddleware');
const userQuizController = require('./UserQuizController');
const generatedUserMiddleware = require('../../middlewares/checkGeneratedUserMiddleware');

router.use(tokenUpdMiddleware);
router.post('/create', generatedUserMiddleware, userQuizController.create); //after quiz ending
router.get('/all/:id', userQuizController.getAll); //to show results of a quiz on the leaderboard

module.exports = router;
