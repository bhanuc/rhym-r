

var Mailgun = require('mailgun');
Mailgun.initialize('site.salarpuria-rhythm.com', 'key-b046bedeefacfebc624803b2f32a4504');
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

Parse.Cloud.beforeSave("CommentObject", function(request, response) {

	var text = "Query Email\n" + 
		"From: "+request.object.get("name") + "\n"+
		"Email: "+request.object.get("email") + "\n"+
		"Mobile No: "+request.object.get("mobno") + "\n\n"+
		"Query:\n" + request.object.get("query");
	
	Mailgun.sendEmail({
			to: "info@regrob.com",
			from: request.object.get("email"),
			subject: "Query Form  ",
			text: text
		}, {
		success: function(httpResponse) {
			response.success();
		},
		error: function(httpResponse) {
			console.error(httpResponse);
			response.error("Uh oh, something went wrong");
		}
	});

});