/*!
@author: 0x51L3N7
@date: 19/12/2011
@note: Doesn't work on local pages with Google Chrome and Maxthon due the limitations of the same.
*/
 
var Cookie = /** @class */ ( function() {

    function Cookie() {
        var data = new Date();
               
        /*! Create and modify cookies
        * @param: {string} Cookie name
        * @param: {string|number|boolean} Cookie value
        * @param: {number} Expiration date of cookie (In milliseconds).
        */
        this.set = function( name, value, expirationDate ) {

            var arr = [];

            //Por defaul, não existe expiração, ou seja o cookie é temporário
            var expires = " ";

            //Especifica o número de dias´para guardar o cookie
            if(expirationDate) {

                data.setTime(data.getTime() + (expirationDate * 24 * 60 * 60 * 1000));
                expires = "; expires = " + data.toGMTString();
            }
            if(value != ""  &&  value != null  &&  value != "null") {
                arr.push(name)
                // Define o cookie com o nome, valor e data de expiração
                window.document.cookie = name + "=" + Base64.encode(JSON.stringify(arr)) + expires + "; path=/";
            }
        }

        this.update = function (name, value, expirationDate) {
            var cookie = this.get(name);
            var arrayCookies = [];
            var obj1 = {id:1, msg:'Senhor a ativade ordenada já acabou', data:'21/092018 14:31:12'};
            var obj2 = {id:2, msg:'Senhor a ativade ordenada já acabou', data:'23/092018 14:31:12'};
            var obj3 = {id:3, msg:'Senhor a ativade ordenada já acabou', data:'24/092018 14:31:12'};
            var obj4 = {id:4, msg:'Senhor a ativade ordenada já acabou', data:'28/092018 14:31:12'};
            var obj5 = {id:5, msg:'Senhor a ativade ordenada já acabou', data:'29/092018 14:31:12'};

            var c = {jogoAcoes:[{id:1, msg:'Senhor a ativade ordenada já acabou', data:'21/092018 14:31:12'}]}
            arrayCookies.push(obj1);
            arrayCookies.push(obj2);
            arrayCookies.push(obj3);
            arrayCookies.push(obj4);
            arrayCookies.push(obj5);

            if (arrayCookies)
            {
                var update = arrayCookies.forEach( function(key, value, arr) {
                    if(value.id == 5) 
                    {
                        console.log(value);
                    }
                });
            }

        }
               
        /*! Gets cookie value
        * @param: {string} Cookie name
        * Returns false if the cookie doesn't exist.
        */
        this.get = function( name ) {

            var value = '';
                   
            for ( i in j = document.cookie.split( ';' ) ) 
            {
                if ( j[i].indexOf( name  + '=' ) > -1 ) 
                {
                    value =  j[i].substr( j[i].indexOf( '=' ) + 1, this.length );
                }                                  
            }

            if (value == undefined || value == null || value == '') 
            {
                console.log('Não existe esse cookie')
                return false;
            } 
            else 
            {
                //console.log(Base64.decode(cookie_value));
                return JSON.parse(Base64.decode(value));
            }
        }
               

        this.getCookiesArray = function() {
                
            var cookies = document.cookie.split(';');
            var c_name = document.cookie;                   
            var array_cookies = []

            if (c_name != undefined && c_name.length > 0) {
                for (var i = 0; i < cookies.length; i++) {
                    var cookie = cookies[i];
                    var eqPos = cookie.indexOf("=");
                    var cookie = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                    array_cookies.push(cookie.trim());
                }
                return array_cookies;
                    
            } else {
                //console.log("Não existem cookies!!!");
                return console.log("Não existem cookies!!!");
            }

        }


        /*
         * @function Private
         * Ler o  cookie
         *
         */ 
        this.check = function(name) {
            if( this.getCookiesArray() ){
                var cookie =  this.getCookiesArray().filter( function(currentValue, index, arr) {
                    if(currentValue == name){
                        console.log(currentValue);
                        return currentValue;
                    } 
                });

                console.log('Existe o cookie: '+cookie);
                return cookie;

            } else {
                console.log('Não existe cookie;');
                return false;
            }
        }

        
        /*
         * ! Deletes the cookie
         * @param: {string} Cookie name
         */
        this.eraseCookie = function(name) {
            // Verifica se o cookie existe
            var nome = this.readCookie(name);
            //Exclui o cookie  
            if(nome != null) {
                // Exclui o cookie
                //this.setCookie(name, "", -360);
                document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
                return 'O cookie '+nome+' foi exluído com sucesso';
            } else {
                return 'Existe o cookie: '+nome;
            }
        }
    }


    return Cookie;
}());



// var cookie = new Cookie;
//cookie.exclude()
//console.log(cookie.get('cronometroEncerrado'));
//cookie.set('cronometroEncerrado', 'Senhor a ativade ordenada já acabou', 360);
// console.log(cookie.get('cadastro'));
// console.log(cookie.get('erros'));
//console.log(cookie.getCookiesArray());