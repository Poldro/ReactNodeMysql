// nodemon ./server.js localhost 8080 (avvio)
require('rootpath')();

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// const jwt = require('_helpers/jwt');
// const errorHandler = require('_helpers/error-handler');


const connectionDB = require('./connectionDB');
const connection = connectionDB.createConnectionDB();
connection.connect();


app.use(function (req, res, next) {
   res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
   res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(cors());
// app.use(jwt());
 

// api routes
app.use('/users', require('./users/user.controller'));

// global error handler
// app.use(errorHandler);

// const port = process.env.NODE_ENV === 'production' ? 80 : 4000;
// const server = app.listen(port, function () {
//     console.log('Server listening on port ' + port);
// });

 var server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
 })

