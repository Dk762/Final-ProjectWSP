const express = require('express');
var app = express();

const servername = "localhost";
const port = 8080;

const fitness = require('./fitness/controller');
const simple = require('./simplecontroller');
app
        .use('/', (req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "*");
            next();
        })
        .use('/simple', simple)
        .use('/fitness', fitness)
        .listen(port);

console.log("Running on http://" + servername + ":" + port);