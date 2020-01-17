const mysql = require('mysql');

/*  // First you need to create a connection to the db
 const connection = mysql.createConnection({
   host: 'mysql5022.site4now.net',
   user: 'a34972_evento',
   password: 'tutuca.99',   
  database: 'db_a34972_evento'
 });
 
 connection.connect((err) => {
   if(err){
     console.log('Error connecting to Db');
	 console.log(err);
     return;
   }
   console.log('Connection established');
 }); */

 var db_config = {
  host: 'mysql5022.site4now.net',
    user: 'a34972_evento',
    password: 'tutuca.99',
    database: 'db_a34972_evento'
};

var connection;
 
/*  connection.end((err) => {
   // The connection is terminated gracefully
   // Ensures all previously enqueued queries are still
   // before sending a COM_QUIT packet to the MySQL server.
 }); */

 function handleDisconnect() {
  connection = mysql.createConnection(db_config); // Recreate the connection, since
                                                  // the old one cannot be reused.

  connection.connect(function(err) {              // The server is either down
    if(err) {                                     // or restarting (takes a while sometimes).
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
    }                                     // to avoid a hot loop, and to allow our node script to
  });                                     // process asynchronous requests in the meantime.
                                          // If you're also serving http, display a 503 error.
  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
      handleDisconnect();                         // lost due to either server restart, or a
    } else {                                      // connnection idle timeout (the wait_timeout
      throw err;                                  // server variable configures this)
    }
  });
}

handleDisconnect();






 module.exports = connection;