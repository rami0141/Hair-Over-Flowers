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
            $("#message").append("Hello " + stylistName + "!");
            // Calling getAppointments Function
            getAppointments();
<<<<<<< HEAD
            displayImage();
=======

            // Displays Stylist Image Dynamically
            var stylistContainer = document.getElementById('showImageHere');
            var img1 = document.createElement('img');
            $(img1).addClass("stylistImage");

            if (stylistName == "Mika Tan") {
                console.log("This is Mika")
                img1.src = "assets/images/stylist1.png";
            }
            else {
                img1.src = "assets/images/stylist2.png";
            }

            stylistContainer.appendChild(img1);

>>>>>>> 5fcc30ede2183a467ae618045bd113209f1a4f48
        });
    }

    // Displays Stylist Image Dynamically
    function displayImage() {
        //console.log(stylistName)
        
        var stylistContainer = document.getElementById('showImageHere');
        var img1 = document.createElement('img');
        $(img1).addClass("stylistImage");

        if (stylistName == "Mika Tan") {
            console.log("This is Mika")
            img1.src = "assets/images/stylist1.png";
        }
        else {
            img1.src = "assets/images/stylist2.png";
        }

            stylistContainer.appendChild(img1);
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

    // ----------------------------------------------------------------
	// This function will loop through all appointments and display only the appointments with todays date
    function loopingAppointments(appointmentArray) {
    	for (var i = 0; i < appointmentArray.length; i++) {
    		// declaring variables
            var iD = appointmentArray[i].id
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

                // dynamically creates table - The comments section is commented out
        		$("#time").append("<tr><td>" + appTime + "</td></tr>");
<<<<<<< HEAD
        		$("#name").append("<tr><td><i class='fas fa-comment fa-lg' data-toggle='popover" + i + " 'title='Comment' data-content=" + comments + "'And here is some amazing content. It is very engaging. Right?'></i> " + name+ "</td></tr>");
=======
        		$("#name").append("<tr><td><i id='pop" + i + "'class='fas fa-comment fa-lg' title='comment'></i> " + name + "</td></tr>");
>>>>>>> 5fcc30ede2183a467ae618045bd113209f1a4f48
        		// $("#email").append("<tr><td>" + email + "</td></tr>");
        		$("#number").append("<tr><td>" + number + "</td></tr>");
        		$("#service").append("<tr><td>" + service + "</td></tr>");

          // $("#comments").append("<h2>Appointment: "+appTime+"</h2><div class='row'><div class='col'>"+name+"<div class='col'>"+email+"<div class='col'>"+service+"<div class='commentStyle'>"+comments+"</div></div></div></div></div>");
        		//$("#button").append("<tr><td><button class='btn btn-primary btn-sm delete" + i + "' type='button'>Check-In</button></td></tr>");
    			$("#button").append("<tr><td><input class='form-check-input delete' type='checkbox' id='defaultCheck1'><label class='form-check-label' for='defaultCheck1'>Check</label></td></tr>");
<<<<<<< HEAD
    	   
           }
=======

					// comment modal function
					$('#comments').hide();
					$("#pop" + i).click(function(){
						$('#appSection').fadeOut();
						$('#comments').fadeIn();
					});

					$('#x').click(function(){
						$('#appSection').fadeIn();
						$('#comments').fadeOut();
					});

    	   }
>>>>>>> 5fcc30ede2183a467ae618045bd113209f1a4f48
        }
    }// End of loopingAppointments functions



<<<<<<< HEAD
    // -------------------------------------------------------------------
=======
>>>>>>> 5fcc30ede2183a467ae618045bd113209f1a4f48
    //Show appointments by month for each stylist
    $('select').on('change', function(){
        monthSelected = this.value;
        appointmentsByMonth(monthSelected);
    });

    function appointmentsByMonth(monthSelected) {
        $("#month").empty();
        $("#monTime").empty();
        $("#monName").empty();
        $("#deleteApp").empty();

        getAppointments();
        for (var i = 0; i < appointmentArray.length; i++) {
            if (appointmentArray[i].appMonth == monthSelected) {
                newArr.push(appointmentArray[i]);

                var I_D = appointmentArray[i].id;
                appMonth = appointmentArray[i].appMonth;
                appDay = appointmentArray[i].appDay;
                appTime = appointmentArray[i].appTime;
                name = appointmentArray[i].name;
                console.log("Hello there")

                $("#month").append("<tr><td>" + appMonth + "-" + appDay + "</td></tr>");
                $("#monTime").append("<tr><td>" + appTime + "</td></tr>");
                $("#monName").append("<tr><td>" + name + "</td></tr>");
                $("#deleteApp").append("<tr><td><button type='button' class='btn btn-danger btn-sm popoover'" + i + "'' id='deleteAppointment' value='" + I_D + "'>Delete</button></td></tr>");
            }
        }
    };

    // --------------------------------------------------------------------
    // Function for handling what happens when the delete button is pressed
    $(document).on("click", "#deleteAppointment", function() {

        console.log("Hello" + this.value);
        id = this.value;
        console.log(id);

        $.ajax({
          method: "DELETE",
          url: "/api/appointments/" + id
        }).done(function(){
            appointmentsByMonth(monthSelected);
        });
    });
}); // end of document.ready function
