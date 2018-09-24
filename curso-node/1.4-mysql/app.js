"use strict"

// config
let app = require('./application/config/config');

// routes
let home = require('./application/routes/home')(app);
let formincnot = require('./application/routes/formulario_inclusao_noticia')(app);
let noticias = require('./application/routes/noticias')(app);
let tecnologia = require('./application/routes/tecnologia')(app);

app.listen(3000, function() {
    console.log("Servidor rodando com Express");
});