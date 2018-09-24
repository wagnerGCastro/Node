const Helpers = {
    // Data atual formatada BR 
    dataAtualFormatada: function  (){
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
    },


    // adiciona zero na Data e hora
    addZero: function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    },

    // data e hora atual
    dataHoraAtualFormatada: function (){
        // Obtém a data/hora atual
        var data = new Date();

        // Guarda cada pedaço em uma variável
        var dia     = data.getDate();           // 1-31
        var dia_sem = data.getDay();            // 0-6 (zero=domingo)
        var mes     = data.getMonth();          // 0-11 (zero=janeiro)
        var ano2    = data.getYear();           // 2 dígitos
        var ano4    = data.getFullYear();       // 4 dígitos
        var hora    = this.addZero(data.getHours());          // 0-23
        var min     = this.addZero(data.getMinutes());        // 0-59
        var seg     = this.addZero(data.getSeconds());        // 0-59
        var mseg    = this.addZero(data.getMilliseconds());   // 0-999
        var tz      = data.getTimezoneOffset(); // em minutos

        // Formata a data e a hora (note o mês + 1)
        var str_data = dia + '/' + (mes+1) + '/' + ano4;
        var str_hora = hora + ':' + min + ':' + seg;

        // Mostra o resultado
        //alert('Hoje é ' + str_data + ' às ' + str_hora);
        return str_data +' '+ str_hora;

    },

    urlParam: function() {
        var query = location.search.slice(1);


        var partes = query.split('&');
        var data = {};
        partes.forEach(function (parte) {
            var chaveValor = parte.split('=');

            var chave = chaveValor[0];
            var valor = chaveValor[1];
            data[chave] = valor;
        });


        //return console.log(data.validacao); // Object {lang: "pt", page: "home"}
        return data; // Object {lang: "pt", page: "home"}
    },

   
    izitoast:  function() {

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

}