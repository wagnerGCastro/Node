// JavaScript Document  Está dentro do Ojeto Window

/* class			: Cookies
 * author  			: wagner
 * date    		 	: 20/09/2018
 * description	  	: gerenciar cookies do site
 */



const Cookie = /** @class */ ( function() {

	function Cookie() {
       //this._conn = connection;


	     /*
		 * @function Private
	     * Ler o  cookie
	     *
	     */ 
	    this.readCookie = function(name) {

			if( getCookiesArray() ){
				var cookie =  getCookiesArray().filter( function(currentValue, index, arr) {
					if(currentValue == name){
						console.log(currentValue);
						return currentValue;
					} 
				});

				//console.log(cookie);
				return cookie;

			} else {
				console.log('Não existe cookie;');
				return false;

			}
		}

		/*
	     * Função Escrever O Cookie
	     * Função Para Definir Um Cookie
	     *
	     */ 
		this.setCookie = function(name, value, days) {
			//Por defaul, não existe expiração, ou seja o cookie é temporário
			var expires = " ";

			//Especifica o número de dias´para guardar o cookie
			if(days) {
				var data = new Date();
				data.setTime(data.getTime() + (days * 24 * 60 * 60 * 1000));
				expires = "; expires = " + data.toGMTString();
			}
			if(value != ""  &&  value != null  &&  value != "null") {
				// Define o cookie com o nome, valor e data de expiração
				window.document.cookie = name + "=" + Base64.encode(value) + expires + "; path=/";
			}
		}

		/*
	     * Exclui um cookie
	     *
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

		// Exibir
	    this.getCookies = function() {
	    	var cookies = document.cookie.split(';');
		    var c_name = document.cookie; 					
		    var names = '';

		    if (c_name != undefined && c_name.length > 0) {
		        for (var i = 0; i < cookies.length; i++) {
			        var cookie = cookies[i];
			        var eqPos = cookie.indexOf("=");
			        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
			        names += name +',';
		    	}

		    	// retira o ultimo caractere
		    	names = names.substring(0,(names.length - 1));
		    	return names;
		            
	        } else {
	            console.log("Não existem cookies!!!");
	            return 'Não existem cookies!!!';
	        }

		}


	    this.deleteAllCookies = function() {
		    var cookies = document.cookie.split(";");

		    for (var i = 0; i < cookies.length; i++) {
		        var cookie = cookies[i];
		        var eqPos = cookie.indexOf("=");
		        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
		        //console.log(name);
		        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
		    }

		    return 'Todos os cookies foram excluídos.';
		}

		/*
		 * @function Private
	     * Retorna os nomes dos cookies em Array
	     *
	     */ 
		function getCookiesArray() {
			
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
	            return false;
	        }

		}


		/* ! Gets cookie value
	     * @param: {string} Cookie name
	     * Returns false if the cookie doesn't exist.
	     */
	    this.getCookieValue = function( name ) {
	    	var cookie_value = '';

	        for ( i in j = document.cookie.split( ';' ) ) {
	            if ( j[i].indexOf( name  + '=' ) > -1 ) {
	            	cookie_value =  j[i].substr( j[i].indexOf( '=' ) + 1, this.length );
	            	//console.log(cookie_value);
	            }                                  
	        }

	        if (cookie_value == undefined || cookie_value == null || cookie_value == '') {
	        	return 'Não existe esse cookie';
	        } else {
	        	//console.log(Base64.decode(cookie_value));
	        	 return Base64.decode(cookie_value);
	        }
	        
	    }

    }


	return Cookie;
}());


// var cookies = document.cookie ? document.cookie.split('; ') : [];

// var arrDados = [];
// var obj1 = {nome:'wagner', usuario:'wagner123', senha: '1345', jogo:'Casatully'};
// var obj2 = {nome:'fagner', usuario:'fagner123', senha: '1234', jogo:'Casatully'};

// arrDados.push(obj1);
// arrDados.push(obj2);

// let cookie = new Cookie();

/* Cria um  cookie */
//cookie.setCookie('cadastro', JSON.stringify(arrDados), 1);


//console.log(document.cookie.split(';'));
//console.log(cookie.readCookie('cadastro'));
//console.log(cookie.checkCookie());


/* Ler um cookie  */
//var lerCoookie = cookie.readCookie('cadastro');
//console.log(lerCoookie);


/* Exibe os Cokies existents*/
//var allCookies = cookie.getCookies();
//console.log(allCookies);

/* Recupera o valor de um Cookie */
//var cookieValue = cookie.getCookieValue('cadastro');

// console.log(typeof(cookieValue));    				// string
// console.log(cookieValue);
// var cookeiValueObj = JSON.parse(cookieValue);
// console.log(typeof(cookeiValueObj));    			// obj
// console.log(cookeiValueObj[0].nome);    			// obj

/* Cadastrar */
//var cadastro = cookie.cadastrar('teste');
//console.log(cadastro);

/* Editar o valor de um cookie*/


/* Excluir  Cookie */
// var deletarCookie = cookie.eraseCookie('cadastro');
// console.log(deletarCookie);

// var deletarTodosCookies = cookie.deleteAllCookies();
// console.log(deletarTodosCookies);

//console.log(document.cookie.split(';'));