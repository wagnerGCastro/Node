
module.exports =  function() { return Jogo;}


var Jogo = /* @class Controller */ ( function() {

	// construcut
	function Jogo() {
		
	}

	// index
	Jogo.prototype.index = function(app,req, res) {

		authentication(req,res);

		var msg = '';
	    if(req.query.msg != ''){
	        msg = req.query.msg;
	    }

		// consulta jogo
		let mJogo  		= new app.application.models.Jogo(app);
		mJogo.getParametros(req.session.usuario.nome, function(itens) {

			///res.send(req.session.usuario.nome +' <=> '+JSON.stringify(itens));
			res.render('jogo', {user: req.session.usuario, item: itens, msg:msg });
		});
		
	}

	// Ordenar açoes do sudito
	Jogo.prototype.ordernarAcaoSudito = function(app,req, res) {
		var dados = req.body;

		req.assert('acao', 'Acão deve ser informada').notEmpty();
		req.assert('quantidade', 'quantidade deve ser informada').notEmpty();

		var erros = req.validationErrors();

		// validações dos campos do formulário
		if (erros) { res.send(erros); return ; }

		dados.usuario = req.session.usuario.nome;

		// inserir dados do jogo
		let mJogo  = new app.application.models.Jogo(app);
		mJogo.acaoSuditos(dados, function(retorno){
		
			if(retorno) {
				console.log('dados inseridos com sucesso');
				res.redirect('jogo?msg=B');
			}
		}); 

    };

    // Pergaminhos
	Jogo.prototype.pergaminhos = function(app, req, res, callback) {
		authentication(req,res);

		let mJogo  = new app.application.models.Jogo(app); 
		mJogo.getAcoes(req.session.usuario.nome, function(result) {
			 console.log(result);
			 res.render('pergaminhos', {acao: result});
		})
       
    };


    // revogar_acao
    Jogo.prototype.revogarAcao = function(app, req, res, callback) {
		authentication(req,res);

		var id =  req.query.id;

		let mJogo  = new app.application.models.Jogo(app); 
		mJogo.revogarAcao(id, function(resp, result) {

			// res.render('pergaminhos', {acao: result});
			if(resp) {
				console.log('foi removido com sucess');
				res.redirect('/jogo?msg=D');
			}
		})
       
    };




    // sair
	Jogo.prototype.sair = function(req, res) {
		if (req.session.usuario) {
			req.session.destroy( function(err, ) { res.redirect('/'); });

		} else {
			res.redirect('/');

		}
	}

    Jogo.prototype.suditos = function(req, res, callback) {
    	authentication(req,res);
        res.render('aldeoes');
    };


    /*
     * @Funçoes privadas da Classe
     * 
     */
    var authentication = function(req,res) {
    	if (!req.session.usuario) {
			res.send('usuario pecreicsa se conectar');
			return;
		}
    }

	return Jogo;
}());


