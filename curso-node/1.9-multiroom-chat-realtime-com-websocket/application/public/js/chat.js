// chat.js

$(document).ready(function(){

	// socket io
	const socket  = io('http://localhost:3000');
	let   msg 	  = $('#msg');
	let   env 	  = $('#enviar_msg');
	let   apelido = $('#apelido');
	let   users   = $('#users');
	let   apAtua  = $('#apelido_atuliazado');

	// envia mensagem para  servidor
	$(env).click( function() {
		socket.emit(
			'msgParaServidor',
			{apelido: apelido.val(), mensagem: msg.val(), apelido_atualizado_nos_clientes: apAtua.val()}
		);
		msg.val('');
		apAtua.val(1);
	});

	// escuta mensagem do servidor
	socket.on('msgParaCliente', function(data) {
		//alert('!!! '+data.apelido + ' ' + data.aviso);

		// boas vindas
		// iziToast.show({
		//     title: data.apelido,
		//     message:  ' ' + data.aviso ,
		//     position: 'center', 
		// });

		var html = '';
		html += '<div class="dialogo">';
		html += 	'<h4>'+data.apelido+' <strong style="font-size:10px;color:#999">'+dataHoraAtualFormatada()+'</strong></h4>';
		html += 	'<p>'+data.msg+'</p>';
		html += '</div>';
		$('#dialogos').append(html);
		window.scrollTo(0, document.body.scrollHeight);
	});

	// atualiza partcipantes
	socket.on('participantesParaCliente', function(data) {
		var html = '';
		html += '<span class="participante">';
		html += 	'<img src="images/ico_usuario.png" />';
		html += 	'<span> '+data.apelido+'</span>';
		html += '</span>';
		$(users).append(html);
	});

	// Participantes
	$("#exibe_chat").click(function(){
		$("#conversa").show();
		$("#participantes").hide();
		ocultaNavbar();
	});
	
	$("#exibe_participantes").click(function(){
		$("#participantes").show();
		$("#conversa").hide();
		ocultaNavbar();
	});


});//end document







let ocultaNavbar = function (){
	$("#btn_navbar_toggle").attr("class","navbar-toggle collapsed");
	$("#navbar-collapse-1").attr("class","navbar-collapse collapse");
	$("#btn_navbar_toggle").attr("aria-expanded","false");
	$("#navbar-collapse-1").attr("aria-expanded","false");
}

let izitoast = function() {

	iziToast.show({
	    id: null, 
	    class: '',
	    title: '',
	    titleColor: '',
	    titleSize: '',
	    titleLineHeight: '',
	    message: '',
	    messageColor: '',
	    messageSize: '',
	    messageLineHeight: '',
	    backgroundColor: '',
	    theme: 'light', // dark
	    color: '', // blue, red, green, yellow
	    icon: '',
	    iconText: '',
	    iconColor: '',
	    iconUrl: null,
	    image: '',
	    imageWidth: 50,
	    maxWidth: null,
	    zindex: null,
	    layout: 1,
	    balloon: false,
	    close: true,
	    closeOnEscape: false,
	    closeOnClick: false,
	    displayMode: 0, // once, replace
	    position: 'center', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
	    target: '',
	    targetFirst: true,
	    timeout: 5000,
	    rtl: false,
	    animateInside: true,
	    drag: true,
	    pauseOnHover: true,
	    resetOnHover: false,
	    progressBar: true,
	    progressBarColor: '',
	    progressBarEasing: 'linear',
	    overlay: false,
	    overlayClose: false,
	    overlayColor: 'rgba(0, 0, 0, 0.6)',
	    transitionIn: 'fadeInUp',
	    transitionOut: 'fadeOut',
	    transitionInMobile: 'fadeInUp',
	    transitionOutMobile: 'fadeOutDown',
	    buttons: {},
	    inputs: {},
	    onOpening: function () {},
	    onOpened: function () {},
	    onClosing: function () {},
	    onClosed: function () {}
	});

}


// Data atual formatada BR 
let dataAtualFormatada = function (){
    var data = new Date();
    var dia = data.getDate();

    if (dia.toString().length == 1) {
        dia = "0" + dia;
    }

    var mes = data.getMonth() + 1;
    if (mes.toString().length == 1) {
        mes = "0" + mes;
    }

    var ano = data.getFullYear();

    return dia + "/" + mes + "/" + ano;
}


// adiciona zero na Data e hora
let addZero =function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

// data e hora atual
let dataHoraAtualFormatada = function (){
    // Obtém a data/hora atual
    var data = new Date();

    // Guarda cada pedaço em uma variável
    var dia     = data.getDate();           // 1-31
    var dia_sem = data.getDay();            // 0-6 (zero=domingo)
    var mes     = data.getMonth();          // 0-11 (zero=janeiro)
    var ano2    = data.getYear();           // 2 dígitos
    var ano4    = data.getFullYear();       // 4 dígitos
    var hora    = addZero(data.getHours());          // 0-23
    var min     = addZero(data.getMinutes());        // 0-59
    var seg     = addZero(data.getSeconds());        // 0-59
    var mseg    = addZero(data.getMilliseconds());   // 0-999
    var tz      = data.getTimezoneOffset(); // em minutos

    // Formata a data e a hora (note o mês + 1)
    var str_data = dia + '/' + (mes+1) + '/' + ano4;
    var str_hora = hora + ':' + min + ':' + seg;

    // Mostra o resultado
    //alert('Hoje é ' + str_data + ' às ' + str_hora);
    return str_data + ' às ' + str_hora;

}