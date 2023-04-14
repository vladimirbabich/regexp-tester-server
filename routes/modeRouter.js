const Router = require('express');
const router = new Router();
const modeController = require('../controllers/ModeController');

router.post('/create', modeController.create);

module.exports = router;
