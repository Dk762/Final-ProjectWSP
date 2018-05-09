var express = require('express');

var Fitness = require('./model');
var app = express.Router();



var fitness = new Fitness();
module.exports = app
    .get('/routines', (req, res) => res.send(fitness.GetRoutines() ) )
    
    