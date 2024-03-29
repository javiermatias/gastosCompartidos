// Carga Libreria Express
let express = require('express')
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');

var OrientDB = require('orientjs');

var cors = require('cors');

// Initialize the app
let app = express();

// use it before all route definitions
app.use(cors());

let apiRoutes = require("./api-routes")
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
 }));

 app.use(bodyParser.json());

 


// Setup server port
var port = process.env.PORT || 8080;
// Send message for default URL
app.get('/', (req, res) => res.send('Bienvenido a gastos Compartidos'));
// Launch app to listen to specified port
// Import routes

// Use Api routes in the App
app.use('/api', apiRoutes)

app.listen(port, function () {
     console.log("Se levanto la app en el puerto" + port);
});

