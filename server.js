const express = require('express');
const mongoose = require('mongoose');
let bodyParser = require('body-parser');

// set up our express app
const app = express();

// connect to mongodb
let dbUrl = process.env.dbUrl

mongoose.connect(dbUrl);
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(express.static('public'));

app.use(express.json());
// initialize routes
app.use('/api',require('./routes/api'));

// error handling middleware
app.use(function(err, req, res, next) {
    res.json({code : -1, msg : "Failed",error : err.message,});
  });



// listen for requests
let port= process.env.port || 4000
app.listen(port , function(){
    console.log(`Listening at port ${port}`);
});

module.exports = app; // for testing
