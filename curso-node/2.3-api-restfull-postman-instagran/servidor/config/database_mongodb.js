
// require do driver mongodb
const mongo = require('mongodb');    //  "mongodb": "^2.2.25",

const connMongodb = function(){ 
	//console.log('Entrou na função de conexão');
	// referencias: https://mongodb.github.io/node-mongodb-native/api-generated/db.html

    var db = new mongo.Db( 'got', new mongo.Server('10.2.0.6', 27017, {}),{} );

    return db;
}

module.exports = function(){
	//console.log('Carregou o módulo database');
	return connMongodb;
}




// teste de conexão
// connMongodb().open(function(err, db) {
//     if (err) {
//     	 console.log(err);

//     } else {
//     	//var alunos = db.alunos.find().pretty();
//     	db.collection('alunos').find({}).toArray(function(err, result){
//     	//db.getCollection('alunos').find({}).toArray(function(err, result){

// 		   console.log(err);
// 		   console.log(result);

// 		    db.close(); 
// 		});

// 		console.log("Database created!");

//     }

// });