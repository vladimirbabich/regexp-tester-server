const Router = require('express');
const router = new Router();
const authMiddleware = require('./../middlewares/authMiddleware');

const userController = require('./../controllers/UserController');

router.post('/', userController.registration); //ok
router.post('/login', userController.login); //ok
router.get('/getuniquenickname', userController.getUniqueNickname);
router.get('/auth', authMiddleware, userController.check);
router.get('/stats'); //for later to get all info about user for stats page(not yet created)

module.exports = router;
