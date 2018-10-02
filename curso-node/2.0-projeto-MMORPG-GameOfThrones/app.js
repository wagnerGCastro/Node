"use strict"

// Importa as configurações do servidor
let app = require('./application/config/config');


// parametriza a porta de escuta
app.listen(3001, function() {
    console.log("Servidor rodando com Express");
});

