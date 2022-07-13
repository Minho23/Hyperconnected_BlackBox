var ibmdb = require('ibm_db');
var connStr = "DRIVER={DB2};DATABASE="";HOSTNAME="";UID="";PWD="";PORT="";PROTOCOL=TCPIP";

ibmdb.open(connStr, function (err, connection) {
  if (err) {
    console.log(err);
    check = 0
    console.log("ERRORE")
    return;
  }

  connection.query("select * from "" ", function (err, rows, sqlca) {
    if (err) {
      console.log(err);
    } else {
      console.log(rows);
    }
  });

  connection.close(function (err2) {
    if (err2) console.log(err2);
  });

});
