var mongoClient = require("mongodb").MongoClient
var ObjectID = require("mongodb").ObjectID

function MongoConnection(){
    this.servidor = "10.2.0.6"
    this.porta = 27017
    this.banco = "olimpiada"
}

MongoConnection.prototype.url = function(){
    return "mongodb://"+this.servidor+":"+this.porta+"/"+this.banco
}

MongoConnection.prototype.open = function(callback){
    mongoClient.connect(this.url(),function(err, db){
        callback(err, db)
    })
}

MongoConnection.getObjectID = function(id){
    return new ObjectID(id)
}

module.exports = MongoConnection;