// ROUTES
module.exports = function(app) {

	app.get('/', function(req, res) {
		app.application.controllers.index.home(app, req, res);
	});
  
  	app.get('/chat', function(req, res) {
		app.application.controllers.chat.iniciachat(app, req, res);
	});

	app.post('/chat', function(req, res) {
		app.application.controllers.chat.iniciachat(app, req, res);
	});
  
}
