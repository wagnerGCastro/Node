"use strict";

var app = require('./application/config/config');

// inclusão de modulos em em ./application/routes
/*
    // Apartir da intalação do consign - não precisa dar requires
	var routeNoticias = require('./application/controllers/noticias');
	routeNoticias(app);
	var routesHome = require('./application/controllers/home')(app);
	var formulario = require('./application/controllers/formulario')(app);
*/


// 1 - Criação de Servidor/ Execução
app.listen(3000, function(){
	//console.log('Servidor rodando Express');
	//console.log(msg());
	console.log('Servidor ON');
});