
use olimpiada;
show collections;
db.createCollection('alunos');
db.alunos.find().pretty();
db.alunos.save({
	nome:'Maria',
	email: 'maria@gmail.com',
	id: '1234'

});


nome: $("#nome").val(),
                //         email: $("#email").val(),
                //            id: $("#id").val()
