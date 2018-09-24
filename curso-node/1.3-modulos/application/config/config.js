// configuraçoes do servidor
const app = require('express')();


// define ejs engine view
app.set('view engine', 'ejs');
app.set('views', './application/views');


module.exports = app;
