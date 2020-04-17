// Importar modelo
Voto = require('./votar');
// Handle index actions
exports.index = function (req, res) {
    Voto.get(function (err, votos) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Votos devueltos",
            data: votos
        });
    });
};

exports.habilitado= function (req, res) {
    let habilitado = true;
    res.json(habilitado);
};

exports.buscar = function (req, res) {
    var _dni = req.query.dni; 
  Voto.find({dni: _dni }, function (err, voto) {
        if (err)
            res.send(err);
        res.json(voto);
    });

};


exports.nuevo = function (req, res) {
    var votante = new Voto();
    votante.nombre = req.body.nombre;
    votante.dni = req.body.dni;
    votante.genero = req.body.genero;
   
// save the contact and check for errors
votante.save(function (err) {
         if (err)
             res.json(err);
res.json({
            message: 'Nuevo voto guardado!',
            data: votante
        });
    });
};
