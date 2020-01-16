function conectarseBD(){

var OrientDB = require('orientjs');

var server = OrientDB({
   host:       'localhost',
   port:       2424,
   username:   'admin',
   password:   'admin'
});

//Connect to 'demodb'
var db = server.use({
    name: 'PPR',
    username: 'admin',
    password: 'admin'
});

return db;
}


exports.buscar = function (req, res) {
    var dbConnection = conectarseBD();
    console.log(dbConnection);
    res.json({
        status: 'Funcionando Ok',
        message: 'Bienvenido a la api de grafos!'
    });

};