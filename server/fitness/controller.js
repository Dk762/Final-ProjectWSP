var express = require('express');

var Fitness = require('./model');
var app = express.Router();



var fitness = new Fitness();
module.exports = app
    .get('/routines', (req, res) =>
     res.send(fitness.GetRoutines(req.query.userName) )   
    )
    .get('/state', (req, res) => res.send(fitness))
    .post('/picture', (req, res) => res.send(fitness.FlipPicture() ))
    .post('/routines', (req, res) => {
        console.log(req.body);
        
        fitness.SelectTask(req.body.Task, req.body.UserName);
        res.send( { success: true } );
    })
    