// =========================================================//
//		           ROUTE NOTÍCIAS				            //
//==========================================================//

module.exports = function(app){

	app.get('/noticias', function(req, res) {

        // coneeão com banco atraves do auto-load
        let conn = app.application.config.database_mysql();
        
        // model
        let mNoticias = new app.application.models.Noticias(conn);

        mNoticias.getNoticias( function(err, result) {
            res.render('noticias/noticias', {noticias : result});
        });
		
	});
}





