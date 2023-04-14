const Router = require('express');
const router = new Router();
const userController = require('./../controllers/UserController');

router.post('/', userController.registration); //ok
router.post('/update', userController.update); //ok
router.get('/getnew', userController.getNewUserName); //+

module.exports = router;
