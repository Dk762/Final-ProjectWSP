const express = require('express');

var app = express();

const servername = "localhost";
const port = 8080;

app.use('/', (req, res, next) => {
    res.write("Hey there How Are You?.");
    res.end();
}).listen(port);

console.log("Running on http://" + servername + ":" + port);