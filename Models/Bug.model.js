const mongoose = require('mongoose');

const bugSchema = new mongoose.Schema({
    bugname:String
});

const Bug = mongoose.model("Bug",bugSchema);

module.exports = {Bug};