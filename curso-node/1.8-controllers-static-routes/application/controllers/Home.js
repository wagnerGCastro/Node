module.exports.index = function(app, req, res) {

	// coneeão com banco atraves do auto-load
    let conn = app.application.config.database_mysql();
    
    // model
    let mNoticias = new app.application.models.Noticias(conn);

	mNoticias.getUltimasNoticias( function( err, result) {

		res.render('home/index', {noticias: result});
	});


}
