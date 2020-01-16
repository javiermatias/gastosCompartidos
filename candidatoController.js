// Importar modelo
Candidato= require('./candidato');
// Handle index actions
exports.todos= function (req, res) {
    Candidato.get(function (err, candidatos) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            candidatos
        });
    });
};



exports.nuevo= function (req, res) {
    var candidato = new Candidato();
    candidato.nombre = req.body.nombre;
    candidato.partido = req.body.partido;
    candidato.imagen = req.body.imagen;
    candidato.cantidadVotos = req.body.cantidadVotos;
// Guarda el candidato
    candidato.save(function (err) {
         if (err)
             res.json(err);
res.json({
            message: 'Nuevo Candidato Guardado!',
            data: candidato
        });
    });
};

exports.update = function (req, res) {
    
   /*  var _nombre = req.query.nombre; 
    var nuevosValores = { $set: {cantidadVotos: "40" }}; */
/*     req.cantidadVotos = '40';
    req.candidato.save(function (err) {
        if (err)
            res.json(err);
res.json({
           message: 'Nuevo Candidato Guardado!',
           data: candidato
       });
   });
}; */
    var _nombre = req.body.nombre;
    var _cantidadVotos = parseInt(req.body.cantidadVotos);
    _cantidadVotos = _cantidadVotos + 1;
    console.log(_cantidadVotos);
    var nuevosValores = { $set: {cantidadVotos: _cantidadVotos}};
    Candidato.updateOne({nombre: _nombre }, nuevosValores, function (err, voto) {
        if (err)
            res.send(err);
        res.json(voto);
    }); 
    //var voto = new Voto();
   // voto.dni = req.body.dni; 
    //var query = { dni: "32972080" };
    /* var _nombre = req.query.nombre; 
    var candidato = new Candidato();
    //console.log(nombre)
    Candidato.find({_nombre}, function (err, _candidato) {
        if (err)
            res.send(err);
            
        _candidato.nombre = "_candidato.nombre";
        _candidato.cantidadVotos = 10;

        //res.json(_candidato);
        _candidato.save(function (err) {
            if (err)
                res.json(err);
   res.json({
               message: 'Actualizado la cantidad de votos !',
               data: _candidato
           });
       }); 
    });
 */
};