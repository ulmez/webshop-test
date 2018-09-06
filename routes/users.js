var express = require('express');
var router = express.Router();
var userController = require('../controllers/UserController');

router.get('/', userController.all_users);
router.get('/user/:id', userController.one_user);
router.post('/user/add', userController.add_user);
router.post('/user/update/:id', userController.update_user);
router.post('/user/delete/:id', userController.delete_user);

module.exports = router;
