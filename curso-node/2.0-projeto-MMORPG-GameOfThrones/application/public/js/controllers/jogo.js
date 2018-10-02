// chat.js

$(document).ready(function(){

	// variáveis
	var vars = {
		//pergaminho: 			document.querySelector('#btnPergaminho'),
		acoes: 					$('#acoes'),
		alertErrors: 			$('#alert-errors'),
		btn_pergaminho: 		$('#btnPergaminho'),
		btn_sudito: 		    document.getElementById('btnSudito'),
		formOrdAcaoSud:  		$('form[name="formOrdenarAcaoSudito"]'),
		tempo_restante: 		document.getElementsByClassName('tempo_restante'),
		timerId: 				 null
	}

	// Pergaminhos
    vars.btn_pergaminho.click( function() {
   	  	vars.alertErrors.css({'display':'none'});
		$.ajax({
			url:		'/pergaminhos',
			type:		'get',
			beforeSend: function() {console.log('enviando...')},
			error:		function() {console.log('houve um erro!')},
			success: 	function(res) {
				vars.acoes.empty().html(res);
				//clearTimeout(timerId);
				cronometro(Helper, vars);
			}
		});
		return false;
   });

    // Suditos  
	vars.btn_sudito.onclick = function() {
		vars.alertErrors.css({'display':'none'});
		$.ajax({
			url:		'/suditos',
			type:		'get',
			beforeSend: function() {console.log('enviando...')},
			error:		function() {console.log('houve um erro!')},
			success: 	function(res) {vars.acoes.empty().html(res)},
			complete:	function() {}
		});
		return false;
	};

	vars.acoes.on('submit', vars.formOrdAcaoSud, function(event) {
		var qtd  = $('#quantidade').val();
		var acao = $('select[name="acao"]').val();

		if ( qtd == '' ) {
			vars.alertErrors.html('<p>O Campo *quantidade esta vazio!<p>').css({'display':'block'});

		} else if (acao == '0' || acao == 0) {
			vars.alertErrors.html('<p>É necessário selecionar uma opção <p>').css({'display':'block'});

		} else if ( acao == '') {
			vars.alertErrors.html('<p>Campo acão não pode esta vazio<p>').css({'display':'block'});

		} else {
			vars.alertErrors.css({'display':'none'});
			$.post('/ordenar_acao_sudito', {quantidade: qtd, acao: acao}, function(resp) {
				//vars.alertErrors.html('<p>'+resp+'<p>').css({'display':'block'});
				iziToast.show({
		            message: resp,
		            messageColor: 'green',
		            backgroundColor: '',
		            theme: 'light', // dark
		            color: 'green', // blue, red, green, yellow
		            position: 'center', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, cente
		            timeout: 5000,
		            pauseOnHover: true,
		            overlayColor: 'rgba(0, 0, 0, 0.6)'
		        });
			});
		}
		//console.log( qtd,  acao);
		event.preventDefault();
	});



 
});//end document





//  cronoemetro
function cronometro(Helper, vars) {
	$.each( document.getElementsByClassName('tempo_restante'), function(key,val) {
	    var segundos 	   = val.innerHTML;
	    var segundosAtuais = parseInt(segundos) - 1;
	    val.innerHTML = segundosAtuais;
	});
	setTimeout('cronometro()', 1000);
}