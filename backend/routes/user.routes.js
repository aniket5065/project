const express = require('express');
const router = express.Router();
const {body} = require("express-validator");
const userController = require('../controllers/user.controller');
const authmiddleware = require('../middlewares/auth.middleware');


router.post('/register', [
    body('email').isEmail().withMessage('Invalid email'),
    body('fullname.firstname').isLength({min: 3}).withMessage
    ('First name must be at least 3 characters long'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long'),

],
    userController.registerUser
);


router.post('/login',[
    body('email').isEmail().withMessage('invalis email'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long'),

],
userController.loginUser);

router.get('/profile',authmiddleware.authUser, userController.getUserProfile)

router.get('/logout', authmiddleware.authUser, (req, res) => {
    userController.logoutUser(req, res);
    res.status(200).json({ message: "Logged out" });
});

router.get('/users/profile', authmiddleware.authUser, userController.getUserProfile);

router.get('/users/logout', authmiddleware.authUser, (req, res) => {
    userController.logoutUser(req, res);
    res.status(200).json({ message: "Logged out" });
});

module.exports = router;

// Example user data
const exampleUser = {
  "user": {
    "_id": "6426c2f17aee0b2c7c0c8e9b",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
};