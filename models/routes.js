const Router = require('express');
const router = new Router();

const userRouter = require('./user/userRouter');
const testRouter = require('./test/testRouter');
const questionRouter = require('./question/questionRouter');
const modeRouter = require('./mode/modeRouter');
const quizRouter = require('./quiz/quizRouter');
const userQuizRouter = require('./user-quiz/userQuizRouter');

router.use('/user', userRouter);
router.use('/test', testRouter);
router.use('/question', questionRouter);
router.use('/mode', modeRouter);
router.use('/quiz', quizRouter);
router.use('/user-quiz', userQuizRouter);

module.exports = router;
