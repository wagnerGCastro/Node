// =========================================================//
//		           ROUTES FORMULARIO			            //
//==========================================================//

module.exports =  function(app) {
	
	// FORMULARIO
    app.get('/formulario', function(req, res){
		app.application.controllers.formulario.form(app, req, res);
    });
	
	// INSERT
	app.post('/formulario/salvar', function(req, res) {
		app.application.controllers.formulario.form_salvar(app, req, res);
	});
	
} // end exports