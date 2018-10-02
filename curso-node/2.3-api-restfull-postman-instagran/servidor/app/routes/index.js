
// require do driver mongodb
const mongo    = require('mongodb');    //  "mongodb": "^2.2.25",
const objectId = require('mongodb').ObjectId; 

// conexão com bando de dados
var db = new mongo.Db( 'instagram', new mongo.Server('10.2.0.6', 27017, {}),{} );

module.exports = function(application){
	application.get('/', function(req, res){
		// res.send('Bem vindo a sua app NodeJS!');
		var resposta = {msg:'Bem vindo a sua app NodeJS'}

		res.format({
			html: function(){
				//res.send('Bem vindo a sua app NodeJS!');
				res.send(resposta);
			},
			json: function(){
				var retorno = {
					body: "Bem vindo a sua app NodeJS!"
				}
				res.json(retorno);
			}
		});

	});


	application.post('/', function(req, res){
		//res.send('teste');
		var dados = req.body;
		res.send(dados);
	});


	// POST URI + verbo HTTP
	application.post('/api', function(req, res) {
		var dados = req.body;

	    // validação dos dados

	    // abre conexão com o bandco de dados 
	    db.open( function(err, mongoClient) {
	    	mongoClient.collection('postagens', function(err, db) {
	    		db.insert(dados, function(err, records) {
	    			if (err) {
	    				res.json(err);
	    				//res.json({'status': '0'});

	    			} else {
	    				res.json(records);
	    				//res.json({'status': '1'});

	    			}
	    			mongoClient.close()
	    		});
	    	});
	    });

		//res.send(dados);

	});

	// GET - URI + verbo HTTP
	application.get('/api', function(req, res) {
	    // abre conexão com o bandco de dados 
	    db.open( function(err, mongoClient) {
	    	mongoClient.collection('postagens', function(err, db) {
	    		db.find().toArray( function(err, results) {

	    			if (err) {
	    				res.json(err);
	    				//res.json({'status': '0'});

	    			} else {
	    				res.json(results);
	    				//res.json({'status': '1'});

	    			}
	    			mongoClient.close();
	    		});
	    	});
	    });
	});

	// GET - URI + verbo HTTP
	application.get('/api/:id', function(req, res) {
		var id = req.params.id;
		    id = objectId(id);

	    // validação dos dados

	    // abre conexão com o bandco de dados 
	    db.open( function(err, mongoClient) {
	    	mongoClient.collection('postagens', function(err, db) {
	    		db.find({_id:{$eq:id}}).toArray( function(err, results) {

	    			if (err) {
	    				res.json(err);
	    				//res.json({'status': '0'});

	    			} else {
	    				//res.json(results);
	    				//res.json({'status': '1'});
	    				res.status(200).json(results)

	    			}

	    			mongoClient.close();
	    		});
	    	});
	    });

		//res.send(dados);

	});

	// PUT by ID (update)
	application.put('/api/:id', function(req, res) {
		var id = req.params.id;
		    id = objectId(id);

		var dadosTitulo = req.body.titulo;

	    // validação dos dados

	    // abre conexão com o bandco de dados 
	    db.open( function(err, mongoClient) {
	    	mongoClient.collection('postagens', function(err, db) {
	    		db.update({_id:{$eq:id}}, {$set:{titulo:dadosTitulo}}, {}, function(err, records) {

	    			if (err) {
	    				res.json(err);
	    				//res.json({'status': '0'});

	    			} else {
	    				res.json(records);
	    				//res.json({'status': '1'});

	    			}

	    			mongoClient.close();
	    		});
	    	});
	    });

		//res.send(dados);

	});

	// DELETE by ID (delete)
	application.delete('/api/:id', function(req, res) {
		var id = req.params.id;
		    id = objectId(id);

		var dadosTitulo = req.body.titulo;

	    // validação dos dados

	    // abre conexão com o bandco de dados 
	    db.open( function(err, mongoClient) {
	    	mongoClient.collection('postagens', function(err, db) {
	    		db.remove({_id:{$eq:id}}, {}, function(err, records) {

	    			if (err) {
	    				res.json(err);
	    				//res.json({'status': '0'});

	    			} else {
	    				res.json(records);
	    				//res.json({'status': '1'});

	    			}

	    			mongoClient.close();
	    		});
	    	});
	    });

		//res.send(dados);

	});

}