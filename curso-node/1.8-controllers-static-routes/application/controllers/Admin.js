module.exports.formulario_inclusao_noticia = function(app, req, res) {

	res.render('admin/form_add_noticia', { validacao:{}, noticia:{} })
}

module.exports.admin_noticia = function(app, req, res) {
	// recebe os campos
	var noticia = req.body;
	//res.send(req);


	// validação dos campos pelo Express Validator
	req.assert('titulo','Titulo é obrigatório').notEmpty();
	req.assert('resumo','Resumo é obrigatório').notEmpty();
	req.assert('resumo','Resumo deve conter entre 10 a 100 caracteres').len(10,100);
	req.assert('autor','Autor é obrigatório').notEmpty();
	req.assert('autor','Autor deve conter entre 2 a 40 caracteres').len(2,40);
	req.assert('noticia','Noticia é obrigatório').notEmpty();
	req.assert('noticia','Noticia deve conter entre 10 a 100 caracteres').len(5,100);

	// valida
	let erros = req.validationErrors();

	console.log(erros);

	if (erros) {
		res.render('admin/form_add_noticia', {validacao:erros, noticia:noticia});
            
		return;

	} else {

		let conn = app.application.config.database_mysql();
		let mNoticias = new app.application.models.Noticias(conn);

		mNoticias.setNoticia(noticia, function(err, result) {
			res.redirect('/noticias');
            
        });
	}
}