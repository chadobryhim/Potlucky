//dependency
var path = require("path");
var dbMethod = require("../controllers/dbMethod.js")
//routes
module.exports = function(app) {
	app.get("/", function(request, result) {
		result.sendFile(path.join(__dirname + "/../public/index.html"));
		consule.log("going to /")
	});

	debugger;

	app.get("/event", function(request, result) {
		result.sendFile(path.join(__dirname + "/../public/event.html"));
	});
	app.get("/event/:UserId/:eventID", function (req, res){

		result.sendFile(path.join(__dirname + "/../public/event.html"));
	});

	app.get("/event-admin", function(request, result) {
		result.sendFile(path.join(__dirname + "/../public/event-admin.html"));
	});

	app.get("/profile", function(request, result) {
		result.sendFile(path.join(__dirname + "/../public/profile.html"));
	});
}
