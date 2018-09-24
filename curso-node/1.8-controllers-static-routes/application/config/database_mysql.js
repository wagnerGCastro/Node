// require do driver mysql
const mysql = require('mysql');

var connMysql = function(){ 
	//console.log('Conexão com bd foi estabelecida');
	return mysql.createConnection({
		host 	 : '10.2.0.3',
		user 	 : 'root',
		password : 'password',
		port     : '3306',
		database : 'portal_noticia'

	});
}

module.exports = function(){
	//console.log('Carregou o módulo database');
	return connMysql;
}