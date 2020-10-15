import express from "express";
import mongoose from "mongoose";
const requireDir = require('require-dir');
//var requireDirectory = require('require-directory');

//inicinando o app
const app = express();

mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

//requireDirectory("./src/models")
requireDir('./src/models/Product.js');


app.get('/', (req, res) => {
    res.send('teste de rota');
});

app.listen(3000);
