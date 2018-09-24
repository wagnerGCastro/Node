// var mongoClient = require("mongodb").MongoClient
// var ObjectID = require("mongodb").ObjectID

// function MongoConnection(){
//     this.servidor = "10.2.0.6"
//     this.porta = 27017
//     this.banco = "olimpiada"
// }

// MongoConnection.prototype.url = function(){
//     return "mongodb://"+this.servidor+":"+this.porta+"/"+this.banco
// }

// MongoConnection.prototype.open = function(callback){
//     mongoClient.connect(this.url(),function(err, db){
//         callback(err, db)
//     })
// }

// MongoConnection.getObjectID = function(id){
//     return new ObjectID(id)
// }


// module.exports = MongoConnection;



var mongoClient = require("mongodb").MongoClient
var ObjectID = require("mongodb").ObjectID

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://10.2.0.6:27017/olimpiada";

MongoClient.connect(url, function(err, db) {
    if (err) {
    	 console.log(err);

    } else {
    	//var alunos = db.alunos.find().pretty();
    	db.collection('alunos').find({}).toArray(function(err, result){
    	//db.getCollection('alunos').find({}).toArray(function(err, result){

		   console.log(err);
		   console.log(result);

		    db.close(); 
		});

		console.log("Database created!");


    }

});

console.log('iniciei');
//console.log( conn);

