
const mariadb = require('mariadb');


// para evitar a execução no auto-load consign
var connMariadb = function() {

	console.log('Conexão com bd foi estabelicida');
	const pool = mariadb.createPool({
        host     : '127.0.0.1',
        user     : 'root',
        password : 'root',
        port     : '3306',
        database : 'portal_noticia'

    });
    return pool;
}
    


module.exports = function() {
	console.log('O autoload carregou o módulo de conexão bd');
	return connMariadb;
}


// pool.query("select * from noticia").then(rows => {
//     //console.log(rows); //[ { 'NOW()': 2018-07-02T17:06:38.000Z }, meta: [ ... ] ]
//     res.send(rows);
    
// }).catch(err => {
//     //handle error
//     console.log("not connected due to error: " + err);

// });



