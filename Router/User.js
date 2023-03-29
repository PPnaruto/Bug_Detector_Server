const express = require('express');
const { SignUp, SignIn } = require('../Controller/Controller');


const userRouter = express.Router();

userRouter.post('/signup',SignUp);
userRouter.get('/signin',SignIn);

module.exports = {userRouter}