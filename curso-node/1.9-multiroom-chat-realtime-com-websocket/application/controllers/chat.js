module.exports.iniciachat = function(app, req, res) {


	// coneeão com banco atraves do auto-load
    let conn = app.application.config.database_mysql();
    
    // model
    //let mChat = new app.application.models.Chat(conn);

    // mNoticias.getNoticias( function(err, result) {
    //     res.render('noticias/noticias', {noticias : result});
    // });

    // recupera os dados formulário
    var dadosForm = req.body;

    // validação 
    req.assert('apelido', 'Nome ou apelido é obrigatório').notEmpty();
    req.assert('apelido', 'Nome ou apelido deve ter 3 a 15 caracteres').len(3,15);


    var erros = req.validationErrors();

    if (erros) {
        //res.send('Existem erros no formulário')
        res.render('index', {erros: erros})

        return;

    } else {

        app.get('io').emit(
            'msgParaCliente', 
            {
                apelido : dadosForm.apelido,
                aviso   : 'acabou de entrar no chat!',
                msg     : 'Entrou no chat '+ dataAtualFormatada()+' hs.'
            }
        );

        res.render('chat', {dadosForm: dadosForm});
    }

}





// adiciona zero na Data e hora
let addZero =function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

// data e hora atual
let dataAtualFormatada = function (){
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