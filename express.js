"use strict";
var express = require('express');
var appExpress = express();

var server =  http.createServer( function(req, res) {
	res.end('<html><body>Portal de noticias </body></html>');
});

// 1 - Criação de Servidor/ Execução
appExpress.listen(3000, function() {
	console.log('Servidor rodando Express');

});

