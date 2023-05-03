const Router = require('express');
const router = new Router();
const tokenUpdMiddleware = require('./../middlewares/tokenUpdMiddleware');
const testController = require('./../controllers/TestController');

router.post('/create', tokenUpdMiddleware, testController.create);
router.get('/getallformode', tokenUpdMiddleware, testController.getAllForMode);

module.exports = router;
