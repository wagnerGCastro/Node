// =========================================================//
//		           ROUTE NOTÍCIA				            //
//==========================================================//


module.exports = function(app){

	app.get('/noticia', function(req, res) {

        // conexão com banco atraves do auto-load
        let conn = app.application.config.database_mariadb();
		
        // consulta
        conn.query("select * from noticia where id = 2" ).then(rows => {
            //console.log(rows); 
            //res.send(rows);
            res.render('noticias/noticia', {noticias : rows});
	        
        }).catch(err => {
            //handle error
            console.log("not connected due to error: " + err);

        });
		
	});
}





