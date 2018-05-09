var express = require('express');
var app = express.Router();

var Fitness = require('./model');

//var fitness = new Fitness();
module.exports = app
    .get('/routines', (req, res) => res.send(Fitness.GetRoutines()))
    