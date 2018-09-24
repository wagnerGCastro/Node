module.exports.noticias = function(app, req, res) {
	// coneeão com banco atraves do auto-load
    let conn = app.application.config.database_mysql();
    
    // model
    let mNoticias = new app.application.models.Noticias(conn);

    mNoticias.getNoticias( function(err, result) {
        res.render('noticias/noticias', {noticias : result});
    });

}

module.exports.noticia = function(app, req, res) {
	// conexão com banco atraves do auto-load
    let conn = application.config.database_mysql();

    // model
    let mNoticia = new app.application.models.Noticias(conn);

    var id = req.query;

    mNoticia.getNoticia( id, function(err, result) {

        console.log(result);
        res.render('noticias/noticia', {noticia : result});
    });

}