// =========================================================//
//		        MODEL 	Classse Jogo				        //
//==========================================================//

var ObjectID = require('mongodb').ObjectId;

module.exports  = function() { return Jogo;}



var Jogo = /** @Class Model */ ( function() {
    //console.log('model Jogo');

    // construct
    function Jogo(app) {
       // conexão com banoco
        this._conn = app.application.config.database_mongodb();

    }

    Jogo.prototype.acaoSuditos = function(dados, callback) {
        this._conn.open( function(err, mongoclient) {
            mongoclient.collection('acao', function(err, db) {
                var hora  = new Date().getTime();
                var tempo = null;
                switch ( parseInt(dados.acao) ) {
                    case 1: tempo = 1 * 60 * 60000;  break;
                    case 2: tempo = 2 * 60 * 60000;  break;
                    case 3: tempo = 5 * 60 * 60000;  break;
                    case 4: tempo = 5 * 60 * 60000;  break;
                }
                dados.acao_termina_em = hora + tempo;
                //console.log(dados);
                db.insert(dados);
              
              console.log('Inserir: => ' + err);
            });

            mongoclient.collection('jogo', function(err, db) {
                var moedas = null;
                switch ( parseInt(dados.acao) ) {
                    case 1: moedas = -2 * dados.quantidade;  break;
                    case 2: moedas = -3 * dados.quantidade;  break;
                    case 3: moedas = -1 * dados.quantidade;  break;
                    case 4: moedas = -1 * dados.quantidade;  break;
                }
                db.update({usuario:dados.usuario}, {$inc:{moeda:moedas}});
               
                console.log('update-: => ' + err);
            });

            callback(true);

        });
    }

    // getAcoes
    Jogo.prototype.getAcoes = function(usuario, callback) {
        this._conn.open( function(err, mongoclient) {
            mongoclient.collection('acao', function(err, db) {
                var dtaAtual = new Date().getTime();
                db.find({ usuario:{$eq:usuario}, acao_termina_em:{$gt:dtaAtual} }).toArray( function(err, result) {
                    callback(result);
                });
                mongoclient.close();
            });
        });
    };

    // gerarParametros
    Jogo.prototype.gerarParametros = function(usuario, callback) {
        this._conn.open( function(err, mongoclient) {
            mongoclient.collection('jogo', function(err, db) {
                db.insert({
                    usuario:        usuario,
                    moeda:          15,
                    suditos:        10,
                    temor:          Math.floor((Math.random() * 1000)),
                    sabedoria:      Math.floor((Math.random() * 1000)),
                    comercio:       Math.floor((Math.random() * 1000)),
                    magia:          Math.floor((Math.random() * 1000))
                });
                callback(true);
                mongoclient.close();
            });
        });
    };

    Jogo.prototype.getParametros = function(usuario, callback) {
        this._conn.open( function(err, mongoclient) {
            mongoclient.collection('jogo', function(err, db) {
                db.find({ usuario: {$eq:usuario} }).toArray( function(err, result) {
                    callback(result[0]);
                });
                mongoclient.close();
            });
        });
    };

     // revogarAcoes
    Jogo.prototype.revogarAcao = function(id, callback) {
        this._conn.open( function(err, mongoclient) {
            mongoclient.collection('acao', function(err, db) {
                db.remove( {_id:ObjectID(id)}, function(err, result) {
                    callback(true, result);
                });
                mongoclient.close();
            });
        });
    };

    return Jogo;
}());
