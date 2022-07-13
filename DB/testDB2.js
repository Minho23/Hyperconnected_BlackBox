var ibmdb = require('ibm_db');
var connStr = "DRIVER={DB2};DATABASE="";HOSTNAME="";UID="";PWD="";PORT=50000;PROTOCOL=TCPIP";
var check = 1

ibmdb.open(connStr, function (err, connection) {
  if (err) {
    console.log(err);
    check = 0
    console.log("ERRORE")
    console.log(check)
    return;
  }

  connection.query("select * from """, function (err, rows, sqlca) {
    if (err) {
      console.log(err);
    } else {
      console.log(rows); // rows = [ [ { '1': 1 } ], [ { '1': 2 } ], [ { '1': 3 } ] ]
    }
  });

  connection.close(function (err2) {
    if (err2) console.log(err2);
  });

  console.log(check)
});
