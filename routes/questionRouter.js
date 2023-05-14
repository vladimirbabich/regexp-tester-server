const Router = require('express');
const router = new Router();
const tokenUpdMiddleware = require('./../middlewares/tokenUpdMiddleware');
const questionRouter = require('./../controllers/QuestionController');

router.post('/create', questionRouter.create); //ok
router.get('/getallformode', questionRouter.getAllForMode); //ok
// router.post('/getall');

module.exports = router;
