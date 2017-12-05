// Dependencies
var http = require("http");
var dbURL= "otwsl2e23jrxcqvx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com"
var PORT = process.env.PORT || 9000;
var path = require("path");
var express = require("express");
var app = express();

//the section for setting up the db
////////////////////////////////////////////////////////////

var dbMethods = require('./controllers/dbMethod.js');
var models = require('./models'); // Pulls out the potluck Models

// Extracts the sequelize connection from the models object makes the various assocation
var sequelizeConnection = models.sequelize;
dbMethods.associate();
sequelizeConnection.sync({force: true});
//////////////////////////////////////////////////////////////////////

// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));
var router = require('./routes/htmlRoutes.js');
app.use('/', router);

var server = http.createServer(function(req, res) {

  // Saving the request method as a variable.
  var requestData = "";

  // When the server receives data, it will add it to requestData.
  req.on("data", function(data) {
    requestData += data;
    console.log("You just posted some data to the server!");
    console.log("Your data was " + requestData);
  });
  //routes


  // When the request has ended...
  req.on("end", function() {
    res.write("<html><head><h1>Thank You!</h1></head><body>");
    res.write("</body></html>");
    res.end();
  });

});

// Starts our server.
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:%s", PORT);
});
