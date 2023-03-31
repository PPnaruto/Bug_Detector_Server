const express = require('express');
const { SignUp, Login } = require('../Controller/Controller');


const userRouter = express.Router();

userRouter.post('/signup',SignUp);
userRouter.post('/login',Login);

module.exports = {userRouter}