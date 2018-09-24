// =========================================================//
//		        MODEL 	CLASSE NOTÍCIAS				        //
//==========================================================//




var Cadastro = /** @class */ ( function() {
    //console.log('model cadastro');

    function Cadastro(connection) {
       this._conn = connection();

    }

    Cadastro.prototype.setUsuario = function(dadosUsuario) {
        this._conn.open( function(err, mongoclient) {

            mongoclient.collection('usuarios', function(err, db) {
                db.insert(dadosUsuario);
                mongoclient.close();
            });

            //realiza a consulta retornando o cadastro
            console.log(err);
        });

       //console.log(this._conn);
    };


    return Cadastro;
}());




module.exports  = function() { return Cadastro;}