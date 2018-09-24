// configuraçoes do servidor
const express 					= require('express');
const consign 					= require('consign');
const bodyparser 				= require('body-parser');
const expressvalidator 			= require('express-validator');
const url 						= require('url');
const cookieparser 				= require('cookie-parser');
//const path 		 				= require('path');

// aplicação do sistema
const app = express();


// define ejs engine view
app.set('view engine', 'ejs');
app.set('views', './application/views');

//console.log('Diretorio: '+__dirname);





app.use(cookieparser());


//  configurar o middleware's
app.use(express.static('./application/public'));      						
//app.use(express.static(path.join(__dirname, '/application/public')));


app.use(bodyparser.urlencoded({entended: true}));     							// tratamento encoded, para recuprar post get
app.use(expressvalidator());


// efetua autoload: 
consign()
	.include('application/config/routes.js')
	.then('application/config/database_mongodb.js')
	.then('application/controllers')
	.then('application/models')
	.into(app);

module.exports = app;
