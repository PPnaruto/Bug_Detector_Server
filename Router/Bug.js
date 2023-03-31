const express = require('express');
const {addBug, getAllBugs} = require('../Controller/Bug');

const bugRouter = express.Router();

bugRouter.get('/',getAllBugs);
bugRouter.post('/add',addBug);

module.exports = {bugRouter}