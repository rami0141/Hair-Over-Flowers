$(document).ready(function() {

	// $(document).on("click", "#app", getAppointments);
	var appointmentArray = [];
	var appTime;
    var appMonth;
    var appDay;
	var name;
	var email;
	var number;
	var service;
    var stylistName;
    var monthSelected;
    var newArr = [];
    var todayArr = [];

    $(window).on("load", pullStylistInfo);

    // Pulling User Info from database
    function pullStylistInfo() {
        $.get("/api/users", function (data) {
            stylistName = data.stylistName;
            // displays the stylist name in the admin page
            $("#message").append("<h1>Hello " + stylistName + "!</h1>");
            getAppointments();
        });
    }

    // -----------------------------------------------------------------
    // Pull Only one stylist appointments
	function getAppointments() {

	$.get("/api/appointments/" + stylistName, function (data) {
        appointmentArray = data;
       // console.log("Array", appointmentArray);
        loopingAppointments(appointmentArray);
       // console.log(appointmentArray[2].name);
    });
  };

	// This function will loop through all appointments and display only the appointments with todays date
    function loopingAppointments(appointmentArray) {
    	for (var i = 0; i < appointmentArray.length; i++) {
    		// declaring variables
    		appTime = appointmentArray[i].appTime;
    		name = appointmentArray[i].name;
    		email = appointmentArray[i].email;
    		number = appointmentArray[i].phone;
    		service = appointmentArray[i].service;
            comments = appointmentArray[i].comments;

            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth()+1;

            //if appointment day is equal to todays date, then it will display
            if (appointmentArray[i].appDay == dd && appointmentArray[i].appMonth == mm) {
                todayArr.push(appointmentArray[i]);
                console.log(todayArr)
            
                // dynamically creates table - The comments section is commented out
        		$("#time").append("<tr><td>" + appTime + "</td></tr>");
        		$("#name").append("<tr><td>" + name+ "</td></tr>");
        		// $("#email").append("<tr><td>" + email + "</td></tr>");
        		$("#number").append("<tr><td>" + number + "</td></tr>");
        		$("#service").append("<tr><td>" + service + "</td></tr>");
                // $("#comments").append("<tr><td>" + comments + "</td></tr>");
        		//$("#button").append("<tr><td><button class='btn btn-primary btn-sm delete" + i + "' type='button'>Check-In</button></td></tr>");
    			$("#button").append("<tr><td><input class='form-check-input delete' type='checkbox' id='defaultCheck1'><label class='form-check-label' for='defaultCheck1'>Check</label></td></tr>");
    	   }
        }
    }// End of loopingAppointments functions


    //Show appointments by month for each stylist
    $('select').on('change', function (){
        $("#month").empty();
        $("#monTime").empty();
        $("#monName").empty();
        monthSelected = this.value; 

        for (var i = 0; i < appointmentArray.length; i++) {
            if (appointmentArray[i].appMonth == monthSelected) {
                newArr.push(appointmentArray[i]);
            
                var I_D = appointmentArray[i].id;
                appMonth = appointmentArray[i].appMonth;
                appDay = appointmentArray[i].appDay;
                appTime = appointmentArray[i].appTime;
                name = appointmentArray[i].name;
                console.log(I_D);

                $("#month").append("<tr><td>" + appMonth + "-" + appDay + "</td></tr>");
                $("#monTime").append("<tr><td>" + appTime + "</td></tr>");
                $("#monName").append("<tr><td>" + name + "</td></tr>");
                $("#deleteApp").append("<tr><td><button type='button' class='btn btn-light' id='deletethisshit'>Delete</button></td></tr>");

            }    
        }      
    });

    // Function for handling what happens when the delete button is pressed
    // $(document).on("click",".deletethisshit", function() { 
    //     console.log("Hello");
    //     // $.ajax({
    //     //   method: "DELETE",
    //     //   url: "/api/appointments/" + id
    //     // })
        
    //   });

    }); // end of document.ready function

