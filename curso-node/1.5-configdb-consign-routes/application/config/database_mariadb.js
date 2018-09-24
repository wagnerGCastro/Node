
const mariadb = require('mariadb');

module.exports = function() {
    const pool = mariadb.createPool({
        host     : '127.0.0.1',
        user     : 'root',
        password : 'root',
        port     : '3306',
        database : 'portal_noticia'

    });

    return pool;
}


// pool.query("select * from noticia").then(rows => {
//     //console.log(rows); //[ { 'NOW()': 2018-07-02T17:06:38.000Z }, meta: [ ... ] ]
//     res.send(rows);
    
// }).catch(err => {
//     //handle error
//     console.log("not connected due to error: " + err);

// });



