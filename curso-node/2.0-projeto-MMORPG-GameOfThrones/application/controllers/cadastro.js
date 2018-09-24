// controllers/cadastro.js


module.exports.index = function(app, req, res) {

     res.render('cadastro', {validacao: {}, dadosForm: {}});

}


module.exports.salvar = function(app, req, res) {

	var dadosPost = req.body;

	req.assert('nome', "Nome não pode ser vazio").notEmpty();
	req.assert('usuario', "Usuário não pode ser vazio").notEmpty();
	req.assert('senha', "Senha não pode ser vazio").notEmpty();
	req.assert('casa', "Casa não pode ser vazio").notEmpty();

	//console.log(dadosPost);

	// armazena os erros em json
	var erros = req.validationErrors();
	var msg   = [];
	for(var i=0; i < erros.length; i++){
		//console.log(erros[i].msg);
		msg.push(erros[i].msg);
	}
	var json = JSON.stringify(msg);


	if (erros) {
		//res.send(JSON.stringify(erros,2,null));
		//res.header("Content-Type", "application/json; charset=utf-8")
		//res.header('Content-Type', 'text/plain')

		res.cookie('erros', json);	
		res.redirect('/cadastro?erros=existem_erros');
		//res.render('cadastro', {validacao: erros, dadosForm: dadosPost });
		return;

	} else {

		// conexão com banoco
		let conn 	   = app.application.config.database_mongodb;
		let mCadastro  = new app.application.models.Cadastro(conn);
			
		mCadastro.setUsuario(dadosPost);
	


		// // realiza o cadastro
		// let mSetUsuarios = new app.application.models.Cadastro(conn);
		//     mSetUsuarios.setUsuarios(dadosPost);

	
		res.send('Podemos cadastrar');

	}

}


