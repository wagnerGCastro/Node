// ROUTES
module.exports = function(app) {

	app.all('*', function(req, res, next) {
	  res.header('Access-Control-Allow-Origin', '*');
	  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
	  res.header('Access-Control-Allow-Headers', 'Content-Type');
	  next();
	});

	app.get('/', function(req, res) {
		app.application.controllers.index.index(app, req, res);

		//res.render('index');
	});
  
	app.get('/cadastro', function(req, res) {
		app.application.controllers.cadastro.index(app, req, res);
		//res.render('cadastro');
	});

	app.post('/cadastro/salvar', function(req, res) {
		app.application.controllers.cadastro.salvar(app, req, res);
		//res.render('cadastro');
	});

  	app.get('/jogo', function(req, res) {
		app.application.controllers.jogo.index(app, req, res);

		//res.render('jogo');
	});

  	
  
}
