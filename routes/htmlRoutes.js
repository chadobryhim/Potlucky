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

/////////////////////////////////////////////////////////////////////////////
//                      Read Methods                                      //
////////////////////////////////////////////////////////////////////////////

////////////Profile Pages//////////////////////////////////////////////////

		//the page for a profile with no data
		app.get("/profile", function(request, result) {
			result.sendFile(path.join(__dirname + "/../public/profile.html"));
		});

		//login to the page from the profile page
		app.get("/profile/login/:fbId", function(req, res) {
			//need to get name from fb
			var name = "test"
			dbMethod.loginNTest(req.params.fbId,name);
			var id = req.params.id
			res.redirect('/profile/'+id);
		});

		//loads the page at a specific profile ID which is gotten when you write now we should run a script to check if we have oath
		app.get("/profile/:id", function(req, res) {
			var object = dbMethod.userEvents(req.params.fbId);
			//sends the json to the handlebars page
		});

//////////Event Pages//////////////////////////////////////////////////////

	//the lading page for an unspeciffied event page
	app.get("/event", function(request, result) {
		result.sendFile(path.join(__dirname + "/../public/event.html"));
	});

	//login function from the event page it redirects to an empty event page
	app.get("/event/login/:fbId", function(req, res) {
		//need to get name from fb
		var name = "test"
		dbMethod.loginNTest(req.params.fbId,name);
		var id = req.params.id
		res.redirect('/event');
	});

	//pulls a specific event ID
	app.get("/event/:eventID/", function(req, res) {
		var eventDetails = dbMethod.potLuckDetails(req.params.eventID);
		var eventDetails = dbMethod.potLuckItems(req.params.eventID);
		//send the two obejcts to an event page
	});

	//pulls a specific event ID with a fb ID and grants admin privliage
	app.get("/event/:eventID/:fbId", function(req, res) {
		var adminTest = false;
		//tests for admin status
		adminTest = dbMethod.adminTest(req.params.fbID, req.params.eventID);
		var eventDetails = dbMethod.potLuckDetails(req.params.eventID);
		var eventItems = dbMethod.potLuckItems(req.params.eventID);
		//send the two obejcts to an event page
	});

	//login from a specifc event page
	app.get("/event/:eventID/login/:fbId", function(req, res) {
		//need to get name from fb
		var name = "test"
		dbMethod.loginNTest(req.params.fbId,name);
		res.redirect('/event'+req.params.eventID+"/"+req.params.fbId);
	});

/////////////////////////////////////////////////////////////////////////
//                        Update Methods                              //
////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////
//                        Create Methods                            //
////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////
//                        Delete Methods                              //
////////////////////////////////////////////////////////////////////////

}
