const mysql = require('mysql');

 // First you need to create a connection to the db
 const connection = mysql.createPool({
  connectionLimit : 10,
   host: 'localhost',
   user: 'root',
   password: '123456',   
  database: 'gastos'
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