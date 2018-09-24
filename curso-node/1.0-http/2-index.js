﻿"use strict";
var http = require('http');

var server =  http.createServer( function(req, res) {

	var categoria = req.url;

	if(categoria == '/tecnlogia'){
		res.end('<html><body> tecnlogia </body></html>');

	} else if(categoria == '/moda') {
		res.end('<html><body> moda </body></html>');

	} else if(categoria == '/beleza') {
		res.end('<html><body> beleza </body></html>');

	} else {
		res.end('<html><body>Portal de noticias </body></html>');
	}

	
});

// 1 - Criação de Servidor/ Execução
server.listen(3000);

console.log('Servidor rodando http');
console.log('node js');
