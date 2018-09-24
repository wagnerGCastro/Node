"use strict"

// Importa as configurações do servidor
let app = require('./application/config/config');


// parametriza a porta de escuta
app.listen(3000, function() {
    console.log("Servidor rodando com Express");
});

