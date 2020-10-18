const mongoose = require("mongoose");
const express = require("express");
const mongodb = express.Router();

mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

module.exports = mongodb;