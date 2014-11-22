

/* global $,document,console,Parse */
$(document).ready(function() {
	
	var parseAPPID = "btW0MTLsNYLvikmhYt3U4fWOXzKl9SgE30AXh8E9";
	var parseJSID = "A5niEfk6ddKZxXNPmj4JGDBXK6gNyzK5V6vEX8UV";
	
	Parse.initialize(parseAPPID, parseJSID);
	var CommentObject = Parse.Object.extend("CommentObject");
	
	$("#leadForm").on("click", function(e) {
		e.preventDefault();

		console.log("Handling the submit");
		//add error handling here
		//gather the form data

		var data = {};
		data.name = $("#name").val();
		data.email = $("#email").val();
		data.mobno = $("#mobno").val();
		data.query = $("#query").val();

		var comment = new CommentObject();
		comment.save(data, {
			success:function() {
				console.log("Success");
				//Alerts are lame - but quick and easy
				alert("Thanks for filling the form!");
			},
			error:function(e) {
				console.dir(e);
			}
		});
		
	});
	
});