// configuraçoes do servidor
const express = require('express');
const consign = require('consign');
const bodyparser = require('body-parser');
const expressvalidator = require('express-validator');


// aplicação do sistema
const app = express();


// define ejs engine view
app.set('view engine', 'ejs');
app.set('views', './application/views');


// implementação de [medular]
app.use(express.static('./application/public'));      // inclui arquivos staticos (como se fosse base_url do php)
app.use(bodyparser.urlencoded({entended: true}));     // tratamento encoded
app.use(expressvalidator());


// autoload: faz todo escaneamento dos diretorios (rotas/controllers/modelsconfig/) e joga pra dentro de app
consign()
	//.include('application/routes')
	.include('application/config/routes.js')
	.then('application/config/database_mysql.js')
	.then('application/controllers')
	.then('application/models')
	.into(app);

module.exports = app;
