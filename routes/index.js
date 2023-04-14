const Router = require('express');
const router = new Router();

const userRouter = require('./userRouter');
const testRouter = require('./testRouter');
const questionRouter = require('./questionRouter');
const modeRouter = require('./modeRouter');

router.use('/user', userRouter);
router.use('/test', testRouter);
router.use('/question', questionRouter);
router.use('/mode', modeRouter);

module.exports = router;
