const Router = require('express');
const router = new Router();
const tokenUpdMiddleware = require('../../middlewares/tokenUpdMiddleware');
const quizController = require('./QuizController');
const generatedUserMiddleware = require('../../middlewares/checkGeneratedUserMiddleware');

router.use(tokenUpdMiddleware);
router.post('/create', generatedUserMiddleware, quizController.create); // works for me | later can rework to give ability of creation to any user
router.get('/get-questions/:id', quizController.getQuizQuestions); //ok
router.get('/get/', quizController.get); //ok
router.get('/get/:id', quizController.get); //ok

module.exports = router;
