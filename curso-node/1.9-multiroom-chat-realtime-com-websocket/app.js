"use strict"

// Importa as configurações do servidor
let app = require('./application/config/config');


// parametriza a porta de escuta
let server = app.listen(3000, function() {
    console.log("Servidor rodando com Express");
});



// Socket
let io = require('socket.io').listen(server);


// define variável global io
app.set('io', io);

// cria a conexão por websocket
io.on('connection', function(socket) {
	console.log('usuário conectou');

	socket.on('disconnect', function() {
		console.log('usuário desconectou');
	});

	// escuta do cliente e envia para servidor e envia para cliente
	socket.on('msgParaServidor', function(data) {

		// [emite] emite só para o atual  [dialogos]
		socket.emit('msgParaCliente', {apelido: data.apelido, msg: data.mensagem });
		// [envia] enviar do lado cliente para todos os usuários  [dialogos]
		socket.broadcast.emit('msgParaCliente',  {apelido: data.apelido, msg: data.mensagem });


		/* participantes */
        if(parseInt(data.apelido_atualizado_nos_clientes) == 0){
            socket.emit(
                'participantesParaCliente',
                { apelido: data.apelido}
            );
            socket.broadcast.emit(
                'participantesParaCliente',
                { apelido: data.apelido}
            );
        }
		
		
	});



	
});