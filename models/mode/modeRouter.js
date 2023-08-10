const Router = require('express');
const router = new Router();
const modeController = require('./ModeController');

router.post('/create', modeController.create);

module.exports = router;
