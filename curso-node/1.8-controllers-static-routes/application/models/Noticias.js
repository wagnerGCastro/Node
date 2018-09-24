// =========================================================//
//		        MODEL 	CLASSE NOTÍCIAS				        //
//==========================================================//


module.exports  = function() { return Noticias;}


var Noticias = /** @class */ ( function() {

    function Noticias(connection) {
       this._conn = connection;
    }

    Noticias.prototype.getNoticias = function(callback) {
        this._conn.query("SELECT * FROM noticia ORDER BY datacriacao DESC LIMIT 10", callback);
    };

    Noticias.prototype.getNoticia = function(id, callback) {
       //console.log(id.id);
       this._conn.query("SELECT * FROM noticia where id = "+ id.id, callback);
    };

    Noticias.prototype.setNoticia = function(noticia, callback) {
		this._conn.query("INSERT INTO `noticia` SET ?", noticia , callback);
    };

    Noticias.prototype.getUltimasNoticias = function(callback) {
        this._conn.query("SELECT * FROM noticia ORDER BY datacriacao DESC LIMIT 5", callback);
    }

    return Noticias;

}());




