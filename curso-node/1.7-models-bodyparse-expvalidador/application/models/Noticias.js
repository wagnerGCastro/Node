// =========================================================//
//		        MODEL 	CLASSE NOTÍCIAS				        //
//==========================================================//


module.exports  = function() { return Noticias;}


var Noticias = /** @class */ (function () {

    function Noticias(connection) {
       this._conn = connection;
    }

    Noticias.prototype.getNoticias = function (callback) {
    	// consulta
        this._conn.query("SELECT * FROM noticia", callback);
        
    };

    Noticias.prototype.getNoticia = function (callback) {
    	// consulta
       this._conn.query("SELECT * FROM noticia where id=2", callback);
        
    };

    Noticias.prototype.setNoticia = function (noticia, callback) {
    	// insert
        //console.log(noticia);
		this._conn.query("INSERT INTO `noticia` SET ?", noticia , callback);
        
    };

    return Noticias;

}());




