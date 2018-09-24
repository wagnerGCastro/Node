"use strict";

var http = require('http');


// Mode de Conexão com Banco  1
const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host 	 : '127.0.0.1',
	user 	 : 'root',
	password : 'root',
	port     : '3306',
	database : 'portal_noticia'

});


// verifica a conexão

// .getConnection()
//     .then(conn => {
//   	console.log("connected ! connection id is " + conn.threadId);
//   	//conn.end(); //release to pool
// })
// .catch(err => {
//   	console.log("not connected due to error: " + err);
// });



var server =  http.createServer( function(req, res) {
	//res.end('<html><body>Portal de noticias </body></html>');

	pool.query("select * from noticia").then(rows => {
		   
	    //console.log(rows); 
	   // res.end(rows)
	   res.end('<html><body>'+JSON.stringify(rows)+'</body></html>');
		    
	}).catch(err => {
	    //handle error
	    console.log("not connected due to error: " + err);

	});
});



// 1 - Criação de Servidor/ Execução
server.listen(3031);

console.log('Servidor ');
console.log('node js');
