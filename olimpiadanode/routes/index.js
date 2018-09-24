var express = require('express');
var Aluno = require('../domain/aluno');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });

});

router.post('/alterar', function(req, res, next){

    console.log(req.body.id)

    Aluno.findById(req.body.id, function(err, result){
        if (err) {
            res.send({mensagem: "ERROR", aluno: null })
        }else{
            res.send({mensagem: "OK", aluno: result[0] })
        }
    })
})

router.post('/excluir', function(req, res, next){

    console.log(req.body.id)
    var aluno = new Aluno()
    aluno._id = req.body.id

    aluno.delete(function(err, result){
        if (err) {
            res.send({mensagem: "ERROR", aluno: null })
        }else{
            res.send({mensagem: "OK", aluno: result[0] })
        }
    })
})

router.post('/salvar', function(req, res, next){
    var aluno = new Aluno()
    aluno.nome = req.body.nome
    aluno.email = req.body.email
    aluno._id = req.body.id

    aluno.save(function(err, result){
        if (err) {
            res.send({mensagem: "ERROR", aluno: aluno})
        }else{
            res.send({mensagem: "OK", aluno: aluno})
        }
    })
})

router.get('/listar', function(req, res, next){
    Aluno.list(function(err, alunos){
        //console.log('Aluno: '+alunos);
        //console.log('Aluno: '+err);
        res.render('listar', { title: 'Express', alunos: alunos });
    })
})


module.exports = router;
