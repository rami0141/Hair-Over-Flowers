$(document).ready(function() {

	// $(document).on("click", "#app", getAppointments);
	var appointmentArray = [];
	var appTime;
	var name;
	var email;
	var number;
	var service;
    var stylistName;

    $(window).on("load", pullStylistInfo);
   
    // Pulling User Info from database
    function pullStylistInfo() {
        $.get("/api/users", function (data) {
            console.log("hello");
            stylistName = data.stylistName;
            // displays the stylist name in the admin page
            $("#message").append("<h1>Hello, " + stylistName + "</h1>");
            getAppointments();
        });
    }

    // -----------------------------------------------------------------
    // Pull Only one stylist appointments
	function getAppointments() {

	$.get("/api/appointments/" + stylistName, function (data) {
        appointmentArray = data;
       console.log("Array", appointmentArray);
        loopingAppointments(appointmentArray);
       // console.log(appointmentArray[2].name);
    });
  };

	// This function will loop through all appointments
    function loopingAppointments(appointmentArray) {
    	for (var i = 0; i < appointmentArray.length; i++) {
    		// declaring variables
    		appTime = appointmentArray[i].appTime;
    		name = appointmentArray[i].name;
    		email = appointmentArray[i].email;
    		number = appointmentArray[i].phone;
    		service = appointmentArray[i].service;
            comments = appointmentArray[i].comments;

            // dynamically creates table - The comments section is commented out
    		$("#time").append("<tr><td>" + appTime + "</td></tr>");
    		$("#name").append("<tr><td>" + name+ "</td></tr>");
    		// $("#email").append("<tr><td>" + email + "</td></tr>");
    		$("#number").append("<tr><td>" + number + "</td></tr>");
    		$("#service").append("<tr><td>" + service + "</td></tr>");
            // $("#comments").append("<tr><td>" + comments + "</td></tr>");
    		// $("#button").append("<tr><td><button class='btn btn-primary btn-sm delete'>Check-In</button></td></tr>");
			$("#button").append("<tr><td><input class='form-check-input delete' type='checkbox' id='defaultCheck1'><label class='form-check-label' for='defaultCheck1'>Check</label></td></tr>");
    	}
    }// End of loopingAppointments functions
});  // end of document.ready function

