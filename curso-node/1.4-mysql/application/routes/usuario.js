

module.exports = function(app) {
	//  INDEX
	app.get('/', function(req, res) {
		app.application.controllers.noticias.index(app, req, res);

	});
	
	//  USUÁRIOS
	app.get('/noticias', function(req, res) {
		app.application.controllers.noticias.noticia(app, req, res);
	});
}