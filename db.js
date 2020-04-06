const mysql = require('mysql');

 // First you need to create a connection to the db
 const connection = mysql.createPool({
  connectionLimit : 10,
   host: 'MYSQL5014.site4now.net',
   user: 'a34972_smart',
   password: '99.tutuca',   
  database: 'db_a34972_smart'
 });
 
 connection.getConnection((err) => {
   if(err){    
     console.log('Error connecting to Db');
	 console.log(err);
     return;
   }
   console.log('Connection established');
 });
 
/*  connection.end((err) => {
   // The connection is terminated gracefully
   // Ensures all previously enqueued queries are still
   // before sending a COM_QUIT packet to the MySQL server.
 }); */






 

 module.exports = connection;