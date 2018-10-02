var crypto = require('crypto');

module.exports  = function() { return Autenticar;}



var Autenticar = /** @Class Model */ ( function() {
    //console.log('controler Autenticar');

    // construct
    function Autenticar(app) {
 		// conexão com banoco
		this._conn = app.application.config.database_mongodb();
    }

    // index
    Autenticar.prototype.getUsuarioAutenticar = function(usuario, req, callback) {

    	var resposta = '';

        usuario.senha = crypto.createHash('md5').update(usuario.senha).digest('hex');

		this._conn.open( function(err, mongoclient ) {

    		mongoclient.collection('usuarios', function(err, db) {
    			
    			// db.find({ usuario: {$eq:usuario.usuario}, senha:{$eq:usuario.senha} }).toArray(function(err, result) {
    			// 	  console.log(result);
    			// });

    			// se operaão de igualdade pode imitir o valor
    			db.find(usuario).toArray(function(err, result) {

    				if(result[0] != undefined){
    					req.session.usuario = {nome: result[0].usuario, casa: result[0].casa, auth:true};
    					//console.log(req.session.usuario );
    					//console.log(result );
  
    				} 

    				if(req.session.usuario){
    				   // 'Usuario foi encontrado no banco de dados'
    				   callback(true);

    				} else {
    					// Usuario não existe no banco de dados
    					callback(false);
    				}

    				//console.log(result);
    			});


    			//db.find(usuario);
		      	mongoclient.close();
		    });
		});

  		//console.log(usuario);
    };


    

    return Autenticar;
}());
