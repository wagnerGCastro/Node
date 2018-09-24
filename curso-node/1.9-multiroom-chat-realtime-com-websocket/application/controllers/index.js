module.exports.home = function(app, req, res) {
	// conexão com banco atraves do auto-load
    //let conn = app.application.config.database_mysql();
    
    // model
    //let mIndex = new app.application.models.Noticias(conn);

    // mNoticias.getNoticias( function(err, result) {
    //     res.render('noticias/noticias', {noticias : result});
    // });

    res.render('index', {erros:{}});
}

