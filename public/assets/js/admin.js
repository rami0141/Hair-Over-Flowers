$(document).ready(function() { 
	$(document).on("click", ".show", getAppointments);
	var appointmentArray = [];
	var appTime;
	var name;
	var email;
	var number;
	var service;

	function getAppointments() {
	$.get("/api/appointments", function (data) {
        appointmentArray = data;
        console.log("Array", appointmentArray);
        loopingAppointments(appointmentArray);
       // console.log(appointmentArray[2].name);
    });
  }

	// This function will loop through all appointments
    function loopingAppointments(appointmentArray) {
    	for (var i = 0; i < appointmentArray.length; i++) {
    		// declaring variables
    		appTime = appointmentArray[i].appTime;
    		name = appointmentArray[i].name;
    		email = appointmentArray[i].email;
    		number = appointmentArray[i].phone;
    		service = appointmentArray[i].service;

    		$("#time").append("<tr><td>" + appTime + "</td></tr>");
    		$("#name").append("<tr><td>" + name+ "</td></tr>");
    		$("#email").append("<tr><td>" + email + "</td></tr>");
    		$("#number").append("<tr><td>" + number + "</td></tr>");
    		$("#service").append("<tr><td>" + service + "</td></tr>");
    		$("#button").append("<tr><td><button class='btn btn-primary btn-sm'>Check-In</button><td><tr>");
    	}
    }
}); // end of document.ready function
