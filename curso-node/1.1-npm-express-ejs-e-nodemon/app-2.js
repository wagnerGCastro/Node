"use strict"
// const express = require('express')
// const app = express();

const app = require('express')();


// define ejs engine view
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
    res.render('home/index');
});

app.get('/formulario_iclusao_noticia', function(req, res) {
    res.render('admin/form_add_noticia');
});

app.get('/tecnologia', function(req, res) {

	// pode ocultar a extensão do arquivo tecnologia.js
    res.render("tecnologia/tecnologia");
});


app.get('/noticias', function(req, res) {
    res.send('notocias/noticias');
});

app.listen(3000, function() {
    console.log("Servidor rodando com Express");
});