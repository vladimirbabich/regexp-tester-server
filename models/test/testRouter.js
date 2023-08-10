const Router = require('express');
const router = new Router();
const tokenUpdMiddleware = require('../../middlewares/tokenUpdMiddleware');
const testController = require('./TestController');
const generatedUserMiddleware = require('../../middlewares/checkGeneratedUserMiddleware');

router.use(tokenUpdMiddleware);
router.post('/create', generatedUserMiddleware, testController.create);
router.get('/getallformode', testController.getAllForMode);

module.exports = router;
