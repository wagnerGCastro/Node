// configuraçoes do servidor
const app = require('express')();
const consign = require('consign');
const bodyparser = require('body-parser');
const expressvalidator = require('express-validator');

// define ejs engine view
app.set('view engine', 'ejs');
app.set('views', './application/views');


// implementação de [medular]
app.use(bodyparser.urlencoded({entended: true}));     // tratamento encoded
app.use(expressvalidator());



// autoload: faz todo escaneamento dos diretorios (rotas/controllers/modelsconfig/) e joga pra dentro de app
consign()
	.include('application/routes')
	//.then('application/config/database_mariadb.js')
	.then('application/config/database_mysql.js')
	.then('application/models')
	.into(app);

module.exports = app;
