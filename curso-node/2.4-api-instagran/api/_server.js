var express 	= require('express'),
	bodyParser 	= require('body-parser'),
	multiparty 	= require('connect-multiparty'),        // para recimento de arquivos                		// manipular arquivos
	mongodb 	= require('mongodb'),
	objectId 	= require('mongodb').ObjectId,
	fs          = require('fs');

var app = express();

//body-parser
app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());
app.use(multiparty());

// configurações para cabeçalho
app.use(function(req, res, next){
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	res.setHeader("Access-Control-Allow-Headers", "content-type");
	res.setHeader("Access-Control-Allow-Credentials", true);

	next();
});


var port = 8080;

app.listen(port);

var db = new mongodb.Db('instagram',new mongodb.Server('localhost', 27017, {}),{});

console.log('Servidor HTTP esta escutando na porta ' + port);





app.get('/', function(req, res){

	res.send({msg:'Olá'});
});

//POST (create)
app.post('/api', function(req, res){

	/*
		enctype = application/x-www-form-urlencode    / para texto
		enctype = multipart/form-data                 / para arquivo [files]

		module -> connect-multiparty
		$ npm install --save connect-multiparty

	*/

	// cabeçalho de retorno para client
	//res.request.setHeader('Acess-Control-Allow_Origin', 'http://localhost:3000');
	//res.setHeader('Access-Control-Allow-Origin', '*');

	var dados = req.body;
	//console.log(dados);
	//console.log(req.files);
	res.send({dados, file:req.files});

	// descobrir a origem do arquivo enviado
	var pathOrigem = req.files.arquivo.path;

	// destino 
	var pathDestino = './uploads/' + req.files.arquivo.originalFilename;

	fs.rename(pathOrigem, pathDestino, function(err) {
		if (err) {
			res.status(500).json({error: err});
			return;
		}
	});

	console.log('foi movido');

	db.open( function(err, mongoclient){
		mongoclient.collection('postagens', function(err, collection){
			collection.insert(dados, function(err, records){
				if(err){
					res.json({'status' : 'erro'});
				} else {
					res.json({'status' : 'inclusao realizada com sucesso'});
				}
				mongoclient.close();
			});
		});
	});

});

//GET (ready)
app.get('/api', function(req, res){
	db.open( function(err, mongoclient){
		mongoclient.collection('postagens', function(err, collection){
			collection.find().toArray(function(err, results){
				if(err){
					res.json(err);
				} else {
					res.json(results);
				}
				mongoclient.close();
			});
		});
	});

});


//GET imagens (ready)
app.get('/imagens/:imagem', function(req, res){
	var img = req.params.imagem;
	fs.readFile('./uploads/'+imagem, function(err, content) {
		if (err) {
			res.status(400).json(err);
			return;
		}
		// contet type que será entregue
		res.writeHead(200, {"content-type":'image/jpg'});
		res.end(content);  // content é um binário
	});

});


//GET by ID (ready)
app.get('/api/:id', function(req, res){
	db.open( function(err, mongoclient){
		mongoclient.collection('postagens', function(err, collection){
			collection.find(objectId(req.params.id)).toArray(function(err, results){
				if(err){
					res.json(err);
				} else {
					res.status(200).json(results);
				}
				mongoclient.close();
			});
		});
	});

});


//PUT by ID (update)
app.put('/api/:id', function(req, res){

	res.send('rota para atualiação ');
	console.log('rota para atualiação');

	// db.open( function(err, mongoclient){
	// 	mongoclient.collection('postagens', function(err, collection){
	// 		collection.update(
	// 			{ _id : objectId(req.params.id) },
	// 			{ $set : { titulo : req.body.titulo}},
	// 			{},
	// 			function(err, records){
	// 				if(err){
	// 					res.json(err);
	// 				} else {
	// 					res.json(records);
	// 				}

	// 				mongoclient.close();
	// 			}
	// 		);
	// 	});
	// });


});


//DELETE by ID (remover)
app.delete('/api/:id', function(req, res){
	db.open( function(err, mongoclient){
		mongoclient.collection('postagens', function(err, collection){
			collection.remove({ _id : objectId(req.params.id)}, function(err, records){
				if(err){
					res.json(err);
				} else {
					res.json(records);
				}
				mongoclient.close();
			});
		});
	});
});
