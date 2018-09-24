"use strict"
// const express = require('express')
// const app = express();

const app = require('express')();


app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.get('/tecnologia', function(req, res) {
    res.send('<html><body>Portal de tecnologia </body></html>');
});

app.get('/noticias', function(req, res) {
    res.send('<html><body>Portal de noticias </body></html>');
});

app.listen(3000, function() {
    console.log("Servidor rodando com Express");
});