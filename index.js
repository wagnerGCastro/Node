"use strict";
var http = require('http');

var server =  http.createServer( function(req, res) {
	res.end('<html><body>Portal de noticias </body></html>');
});

// 1 - Criação de Servidor/ Execução
server.listen(3000);
console.log('Servidor rodando Express');

console.log('node js');
