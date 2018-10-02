// chat.js

$(document).ready(function(){
	// variáveis
	var form_cadastro   = $('form[name="cadastro"]');
	var nome 		    = $('#nome');
	var usuario  		= $('#usuario'); 
	var senha  			= $('#senha');
	var jogo			= document.querySelectorAll('.left-item');

	var cookie = new Cookie();

	form_cadastro.submit( function() {

		for (var i = 0; i < jogo.length; i++) {
	        if (jogo[i].checked) {
	            //console.log("Escolheu: " + radios[i].value);
	            jogo.value = jogo[i].value;
	        }
	    }

		var arrDados = [];
		var obj = {nome: nome.val(), usuario: usuario.val(), senha: senha.val(), jogo: jogo.value};
		arrDados.push(obj);
		/* Cria um  cookie */
		cookie.setCookie('cadastro', JSON.stringify(arrDados), 1);
			
	});



	// cookie cadastro
	if( cookie.readCookie('cadastro') != null  || cookie.readCookie('cadastro') == '') {
		// Recupera o valor de um Cookie 
		var cookieValue = cookie.getCookieValue('cadastro');
		var cookeiValueObj = JSON.parse(cookieValue);
		
		nome.val(cookeiValueObj[0].nome);
		usuario.val(cookeiValueObj[0].usuario);
		senha.val(cookeiValueObj[0].senha);
		
		// marca o campo radio box
	    for (var i = 0; i < jogo.length; i++) {
	    	
	        if (jogo[i].value === cookeiValueObj[0].jogo) {
	            jogo[i].checked = true;
	            //alert(jogo[i].value);
	        }
	    }
	}

	/* Excluir  Cookie */
	// var deletarCookie = cookie.eraseCookie('cadastro');
	// console.log(deletarCookie);



	// cookie erros
	if( cookie.readCookie('cadastro') != null  || cookie.readCookie('cadastro') == '') {
		// Recupera o valor de um Cookie 
		var cookieValue = cookie.getCookieValue('erros');
		//var cookeiValueObj = JSON.parse(cookieValue);

		console.log(cookieValue);
		//var deletarCookie = cookie.eraseCookie('erros');
		//console.log(deletarCookie);
	}	

	console.log(Helpers.dataHoraAtualFormatada());

});//end document







