var mysql = require('mysql');

exports.createConnectionDB = () => {
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: ""
      });
    return con;
  }

  //aggiungere try catch