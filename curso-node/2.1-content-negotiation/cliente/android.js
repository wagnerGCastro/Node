var http = require('http');

var opcoes = {
    hostname: 'localhost',
    port: 32777,
    path: '/teste',
    method: 'post',
    headers: {
        'Accept': 'application/json',   // recebe como Josn
        'Content-type': 'application/x-www-form-urlencoded',  // para envio de html
        'Content-type': 'application/json' 
    }
}

// Content-type [para envio de formulario]
var html = 'nome=josé';  /// x-www-form-urlencoded
var json = {nome:'josé'};  /// x-www-form-urlencoded
var string_json = JSON.stringify(json);

var buffer_corpo_response = [];

//http.get('http://localhost:32777', function(res){
//http.get(opcoes, function(res){
var req = http.request(opcoes, function(res){
    res.on('data', function(pedaco){
        buffer_corpo_response.push(pedaco);
    });

    res.on('end', function(){
        var corpo_response = Buffer.concat(buffer_corpo_response).toString();
        console.log(corpo_response);
        console.log(res.statusCode);
    });
});

//req.write(html);
req.write(string_json);
req.end();