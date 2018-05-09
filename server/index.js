const express = require('express');
var app = express();

const servername = "localhost";
const port = 8080;

const fitness = require('./fitness/controller');
const simple = require('./simplecontroller');
app
        .use('/simple', simple)
        .use('/fitness', fitness)
        .listen(port);

console.log("Running on http://" + servername + ":" + port);