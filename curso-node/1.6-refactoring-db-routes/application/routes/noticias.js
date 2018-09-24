// =========================================================//
//		           ROUTE NOTÍCIAS				            //
//==========================================================//





module.exports = function(app){

	app.get('/noticias', function(req, res) {

        // coneeão com banco atraves do auto-load
        let conn = app.application.config.database_mariadb();
		
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





