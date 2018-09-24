// =========================================================//
//		           ROUTE NOTÍCIAS				            //
//==========================================================//


// estrura original sem exports
//	app.get('/noticias', function(req, res) {
//    res.send('notocias/noticias');
//});


// estrura do commonjs
module.exports = function(app) {
	app.get('/noticias', function(req, res) {
		res.render('noticias/noticias');
	});
}



