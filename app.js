'use strict';
var express = require('express');
var path = require('path');
var AV = require('leanengine');

var app = express();
app.use(AV.express());

app.use(express.static('dist'));

// for system.js to work. Can be removed if bundling.
// app.use(express.static(path.resolve(__dirname, '.')));
// app.use(express.static(path.resolve(__dirname, '../node_modules')));

var renderIndex = (req , res) => {
    res.sendFile(path.resolve(__dirname, 'dist/index.html'));
}

app.get('/*', renderIndex);


module.exports = app;