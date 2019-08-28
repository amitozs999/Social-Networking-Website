var express=require('express');

var router=express.Router();

var passport = require('passport');

var userController=require('../controller/user_controller')


router.get('/profile/:id', passport.checkAuthentication, userController.profile);
router.post('/update/:id', passport.checkAuthentication, userController.update);

router.get('/sign-up', userController.signUp);
router.get('/sign-in', userController.signIn);


router.post('/create', userController.create);

// use passport as a middleware to authenticate
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/user/sign-in'},
), userController.createSession);

router.get('/sign-out', userController.destroySession);




module.exports=router;
