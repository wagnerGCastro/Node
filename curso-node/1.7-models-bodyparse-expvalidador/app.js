"use strict"

// config
let app = require('./application/config/config');



app.listen(3000, function() {
    console.log("Servidor rodando com Express");
});