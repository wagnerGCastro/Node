// =========================================================//
//		           ROUTE NOTÍCIAS				            //
//==========================================================//

// coneeão com banco
let conn = require('../config/database_mariadb')();



module.exports = function(app){

	app.get('/noticias', function(req, res) {

		
        // consulta
        conn.query("select * from noticia").then(rows => {
            //console.log(rows); 
            //res.send(rows);
            res.render('noticias/noticias', {noticias : rows});
	        
        }).catch(err => {
            //handle error
            console.log("not connected due to error: " + err);

        });
		
	});
}





