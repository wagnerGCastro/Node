// =========================================================//
//		           ROUTE NOTÍCIAS				            //
//==========================================================//


//  1 - estrura original sem exports
//app.get('/noticias', function(req, res) {
//    res.send('notocias/noticias');
//});


// 2 - 
module.exports = function(app){

	app.get('/noticias', function(req, res) {

		// require modulo mariadb
        const mariadb = require('mariadb');

        // coenexão com banco
        const pool = mariadb.createPool({
            host 	 : '127.0.0.1',
			user 	 : 'root',
			password : 'root',
			port     : '3306',
			database : 'portal_noticia'

        });

        // consulta
        pool.query("select * from noticia").then(rows => {
            //console.log(rows); 
            //res.send(rows);
            res.render('noticias/noticias', {noticias : rows});
	        
        }).catch(err => {
            //handle error
            console.log("not connected due to error: " + err);

        });
		
	});
}





