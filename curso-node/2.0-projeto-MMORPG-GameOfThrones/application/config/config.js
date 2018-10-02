// configuraçoes do servidor
const express 					= require('express');
const consign 					= require('consign');
const bodyparser 				= require('body-parser');
const expressvalidator 			= require('express-validator');
const expressSession 			= require('express-session');
const cookieparser 				= require('cookie-parser');
//const path 		 				= require('path');

// aplicação do sistema server
const app = express();


/* define ejs engine view */
app.set('view engine', 'ejs');
app.set('views', './application/views');


/* configurar o middleware's */
app.use(expressSession( { secret: 'sdfsdf3434ssdfd', resave: false, saveUninitialized: false} ));
app.use(cookieparser());
app.use(express.static('./application/public'));      						
//app.use(express.static(path.join(__dirname, '/application/public')));
app.use(bodyparser.urlencoded({entended: true}));     
app.use(expressvalidator());


/* efetua autoload:  */
consign()
	.include('application/config/routes.js')
	.then('application/config/database_mongodb.js')
	.then('application/controllers')
	.then('application/models')
	.then('application/thirdparty')
	.into(app);

module.exports = app;
