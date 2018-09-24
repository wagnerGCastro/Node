
var http = require('http');

const mysql = require('mysql');

var connMysql =  mysql.createConnection({
	host 	 : '10.2.0.3',
	user 	 : 'root',
	password : 'password',
	port     : '3306',
	database : 'portal_noticia'

});

connMysql.connect( function(err) {
  	if (err) {
    	console.error('error connecting: ' + err.stack);
    	return;
  	}
 
  	console.log('connected as id ' + connMysql.threadId);
});


var server =  http.createServer( function(req, res) {
	//res.end('<html><body>Portal de noticias </body></html>');
	connMysql.query('SELECT * FROM noticia;', function(err, result,fields) {
	 	//console.log(fields);
	 	//console.log(result);
	 	res.end('<html><body>'+JSON.stringify(result)+'</body></html>');
	 	//res.end('<html><body>'+result+'</body></html>');
	});

});


// 1 - Criação de Servidor/ Execução
server.listen(3031);

console.log('Servidor ');
console.log('node js');
