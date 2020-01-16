// Modelo Voto
var mongoose = require('mongoose');
// Setup schema
var votoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    dni: {
        type: String,
        required: true
    },
    genero: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Contact model
var Voto = module.exports = mongoose.model('voto', votoSchema);
module.exports.get = function (callback, limit) {
    Voto.find(callback).limit(limit);
}