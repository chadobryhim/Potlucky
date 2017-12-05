// Dependencies
var http = require("http");
var dbURL= "otwsl2e23jrxcqvx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com"
var PORT = 8080;
var path = require("path");
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var server = http.createServer(function(req, res) {

  // Saving the request method as a variable.
  var requestData = "";

  // When the server receives data, it will add it to requestData.
  req.on("data", function(data) {
    requestData += data;
    console.log("You just posted some data to the server!");
    console.log("Your data was " + requestData);
  });

  // When the request has ended...
  req.on("end", function() {
    res.write("<html><head><h1>Thank You!</h1></head><body>");
    res.write("</body></html>");
    res.end();
  });

});

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

// Starts our server.
server.listen(PORT, function() {
  console.log("Server listening on: http://localhost:%s", PORT);
});

//routes
require("./routes/htmlRoutes.js")(app);

