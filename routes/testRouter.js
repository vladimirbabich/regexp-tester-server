const Router = require('express');
const router = new Router();
const testController = require('./../controllers/TestController');

router.post('/create', testController.create);
router.get('/getallformode', testController.getAllForMode);

module.exports = router;
