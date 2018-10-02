

module.exports  = function() { return Autenticar;}



var Autenticar = /** @Class Controller */ ( function() {
    //console.log('controler Autenticar');

    // construct
    function Autenticar() {

    }

    // index
    Autenticar.prototype.index = function(app, req, res) {

      	var dadosPost = req.body;

		req.assert('usuario', "Usuário não pode ser vazio").notEmpty();
		req.assert('senha', "Senha não pode ser vazio").notEmpty();

		console.log(dadosPost);

		// armazena os erros em json
		var erros = req.validationErrors();
	
		if (erros) {
			//res.send(erros);
			res.render('index', {validacao: erros, dadosForm: dadosPost, msg: {} });
			return;

		} else {

			let mAutenticar  = new app.application.models.Autenticar(app);
			mAutenticar.getUsuarioAutenticar(dadosPost, req, function(result){

				if (!result) {
					//res.send('Usuario não existe no banco de dados');
					res.render('index', {validacao: {}, dadosForm: dadosPost, msg:'Usuario não existe no banco de dados'} );

				} else {
					res.redirect('jogo');
				}

			});

		}//end else

    };





    return Autenticar;
}());
