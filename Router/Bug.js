const express = require('express');
const {addBug} = require('../Controller/Bug');

const bugRouter = express.Router();

bugRouter.post('/add',addBug);

module.exports = {bugRouter}