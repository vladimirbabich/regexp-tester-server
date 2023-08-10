const Router = require('express');
const router = new Router();
const tokenUpdMiddleware = require('../../middlewares/tokenUpdMiddleware');
const questionRouter = require('./QuestionController');
const generatedUserMiddleware = require('../../middlewares/checkGeneratedUserMiddleware');

router.post('/create', questionRouter.create);
router.get('/getallformode', tokenUpdMiddleware, questionRouter.getAllForMode);

module.exports = router;
