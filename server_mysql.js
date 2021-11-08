const express = require('express');

const bodyParser= require('body-parser');

const mysql = require('mysql');
const app = express();

const con = mysql.createConnection({
  host: "db4free.net",
  user: "sahmen",
  password: "S@hmen@321",
  database: "sahmen_db"
});

app.get('/data', async (req, res) => {
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM electric_consump_data", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
	return result;
  });
});
});

app.listen(9999, () => { 
    
    console.log('Server is running...') 
});


