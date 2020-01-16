// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'Funcionando Ok',
        message: 'Bienvenido a la votacion!'
    });
});


var gastosController = require('./gastosController');

// Contact routes
router.route('/gastos')
    .get(gastosController.get)
    .post(gastosController.post);
    

    router.route('/gastosParcial')
    .get(gastosController.getParcial)
  

// Import contact controller
var votarController = require('./votarController');

// Contact routes
router.route('/votar')
    .get(votarController.buscar)
    .post(votarController.nuevo);

router.route('/votantes')
    .get(votarController.index);

/* var candidatoController = require('./candidatoController');

router.route('/candidato')
    .get(candidatoController.todos)
    .put(candidatoController.update)
    .post(candidatoController.nuevo); */

// Export API routes

var grafosController = require('./grafosController');

router.route('/grafos').get(grafosController.buscar);

module.exports = router;