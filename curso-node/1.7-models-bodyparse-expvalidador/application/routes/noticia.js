// =========================================================//
//		           ROUTE NOTÍCIA				            //
//==========================================================//

module.exports = function(app){

	app.get('/noticia', function(req, res) {

        // conexão com banco atraves do auto-load
        let conn = app.application.config.database_mysql();

        // model
        let mNoticia = new app.application.models.Noticias(conn);

        mNoticia.getNoticia( function(err, result) {
            res.render('noticias/noticia', {noticia : result});
        });
		
	});
}





