var crypto = require('crypto');

// =========================================================//
//		        MODEL 	Classse Cadastro				     //
//==========================================================//
module.exports  = function() { return Cadastro;}


var Cadastro = /** @Class Model */ ( function() {
    //console.log('model cadastro');

    // construct
    function Cadastro(app) {
        // conexão com banoco
        this._conn = app.application.config.database_mongodb();

    }

    // setUsuario
    Cadastro.prototype.setUsuario = function(dadosUsuario, callback) {
        this._conn.open( function(err, mongoclient) {
            mongoclient.collection('usuarios', function(err, db) {
                console.log(dadosUsuario);
                var senhaCriptografada = crypto.createHash('md5').update(dadosUsuario.senha).digest('hex');
                dadosUsuario.senha = senhaCriptografada
                db.insert(dadosUsuario);
                callback(true)
                mongoclient.close();
            });

            //realiza a consulta retornando o cadastro
            //console.log(err);
        });

    };





    return Cadastro;
}());


