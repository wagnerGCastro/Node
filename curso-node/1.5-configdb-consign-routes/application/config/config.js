// configuraçoes do servidor
const app = require('express')();
const consign = require('consign');

// define ejs engine view
app.set('view engine', 'ejs');
app.set('views', './application/views');

// autoload: faz todo escaneamento dos diretorios e jogo pra dentro de app
consign().include('application/routes').into(app);

module.exports = app;
