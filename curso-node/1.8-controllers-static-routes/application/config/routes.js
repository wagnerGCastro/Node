// ROUTES
module.exports = function(app) {

	app.get('/', function(req, res) {
		 app.application.controllers.Home.index(app, req, res);
	});

	app.post('/admin/noticia', function(req, res) {
		app.application.controllers.Admin.admin_noticia(app, req, res);
	});

	app.get('/formulario_inclusao_noticia', function(req, res) {
    	app.application.controllers.Admin.formulario_inclusao_noticia(app, req, res);
	});
	
	app.get('/noticia', function(req, res) {
		//console.log(req.query);
        app.application.controllers.Noticias.noticia(app, req, res);
    });

	app.get('/noticias', function(req, res) {
        app.application.controllers.Noticias.noticias(app, req, res);
	});

    app.get('/tecnologia', function(req, res) {
    	app.application.controllers.Tecnologia.index(app, req, res);
	});
  
}
