// ROUTES
module.exports = function(app) {

	app.all('*', function(req, res, next) {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
		res.header('Access-Control-Allow-Headers', 'Content-Type');
		next();

	});

	app.get('/', function(req, res) {
		var home = new app.application.controllers.Index();
		home.index(req, res);
	});


	app.post('/autenticar', function(req, res) {
		/* @class  controller autenticar*/
 		var autenticar = new app.application.controllers.Autenticar();
		autenticar.index(app, req, res);
	});

  
	app.get('/cadastro', function(req, res) {
		/* @class  controller cadastro*/
 		var cadastro = new app.application.controllers.Cadastro();
		cadastro.index(app, req, res);
	});

	app.post('/cadastro/salvar', function(req, res) {
		/* @class  controller salvar*/
 		var salvar = new app.application.controllers.Cadastro();
		salvar.setUsuario(app, req, res);
		//res.render('cadastro');
	});

  	app.get('/jogo', function(req, res) {
  		/* @class  controller jogo*/
		var jogo = new app.application.controllers.Jogo();
		jogo.index(app,req, res);
	});

	app.post('/ordenar_acao_sudito', function(req, res) {
  		/* @class  controller jogo*/
		var ordernarSuditosJogo = new app.application.controllers.Jogo();
		ordernarSuditosJogo.ordernarAcaoSudito(app, req, res);
		
	});

	app.get('/pergaminhos', function(req, res) {
  		/* @class  controller jogo*/
		var pergaminhosJogo = new app.application.controllers.Jogo();
		pergaminhosJogo.pergaminhos(app, req, res);
		
	});

	app.get('/revogar_acao', function(req, res) {
  		/* @class  controller jogo*/
		var revogar = new app.application.controllers.Jogo();
		revogar.revogarAcao(app, req, res);
		
	});

	app.get('/sair', function(req, res) {
  		/* @class  controller jogo*/
		var sairJogo = new app.application.controllers.Jogo();
		sairJogo.sair(req, res);
	});

	app.get('/suditos', function(req, res) {
  		/* @class  controller jogo*/
		var suditosJogo = new app.application.controllers.Jogo();
		suditosJogo.suditos(req, res);
	});

  	
  
}
