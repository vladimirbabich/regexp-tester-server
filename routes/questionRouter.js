const Router = require('express');
const router = new Router();
const tokenUpdMiddleware = require('./../middlewares/tokenUpdMiddleware');
const questionRouter = require('./../controllers/QuestionController');

router.post('/create', tokenUpdMiddleware, questionRouter.create); //ok
router.get('/getallformode', tokenUpdMiddleware, questionRouter.getAllForMode); //ok
// router.post('/getall');

module.exports = router;
