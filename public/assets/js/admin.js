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
            displayImage();
           });
    }

    // ----------------------------------------------------------------
    // Displays Stylist Image Dynamically
    function displayImage() {
        var stylistContainer = document.getElementById('showImageHere');
        var img1 = document.createElement('img');
        $(img1).addClass("stylistImage");

        if (stylistName == "Mika Tan") {
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
            sortByDay();
        });
      };

     // ----------------------------------------------------------------
     // This function sorts by Appointment
    function sortByDay() {
        appointmentArray.sort(function(a, b){return new Date(a.appDate) - new Date(b.appDate)});
        loopingAppointments(appointmentArray);
    }

    // This will clear table data for an appointment that is deleted
    function clearTable() {
        $("#time").empty();
        $("#name").empty();
        $("#number").empty();
        $("#service").empty();
        $("#comments").empty();
        loopingAppointments(appointmentArray)
    }

    // ----------------------------------------------------------------
    // This function will loop through all appointments and display only the appointments with todays date
    function loopingAppointments(appointmentArray) {
        for (var i = 0; i < appointmentArray.length; i++) {
            // declaring variables
            var iD = appointmentArray[i].id
            aDate = new Date(appointmentArray[i].appDate);
            name = appointmentArray[i].name;
            email = appointmentArray[i].email;
            number = appointmentArray[i].phone;
            service = appointmentArray[i].service;
            comments = appointmentArray[i].comments;

            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth();

            //if appointment day is equal to todays date, then it will display
            if (aDate.getMonth() == mm && aDate.getDate() == dd) {
                todayArr.push(appointmentArray[i]);
                // dynamically creates table
                $("#time").append("<tr><td>" + aDate.toLocaleTimeString() + "</td></tr>");
                $("#name").append("<tr><td><i id='pop" + i + "'class='fas fa-comment fa-lg' title='comment'></i> " + name + "</td></tr>");
                $("#number").append("<tr><td>" + number + "</td></tr>");
                $("#service").append("<tr><td>" + service + "</td></tr>");
                $("#comments").append("<div class='container'><h2 class='text-center'>Appointment - " + aDate.toLocaleString() + "</h2><div><h4 class='text-center'>" + name + " - " + email + " - " + service + "</h4></div><div class='commentStyle'><h4 class='text-center'>Comment: " + comments + "</h4></div></div><br><br>");
            }
                   // comment modal function
                   $('#comments').hide();
                   $("#pop" + i).click(function(){

                   $('#appSection').fadeOut();
                   $('#comments').fadeIn();
                });
                  // x close out the comment modal
                   $('#x').click(function(){
                   $('#appSection').fadeIn();
                   $('#comments').fadeOut();
               });

           }
        }

    // -------------------------------------------------------------------
    // Pulls appointments for stylist when an appointment has been deleted
    function getAppointmentstwo() {
        $.get("/api/appointments/" + stylistName, function (data) {
            appointmentArray = data;
            sortByDay();
            appointmentsByMonth(monthSelected);
            // sortAppointmentsByDay(appointmentArray);
            clearTable();
        });
      };

    $('select').on('change', getValue);

    // ------------------------------------------------------------------
    //Show appointments by month for each stylist
    function getValue() {
        monthSelected = this.value;
        appointmentsByMonth(monthSelected);
    };

   // Creates HTML for Appointments By Month Section
   function appointmentsByMonth(monthSelected) {
        $("#month").empty();
        $("#monTime").empty();
        $("#monName").empty();
        $("#deleteApp").empty();

        for (var i = 0; i < appointmentArray.length; i++) {
            aDate = new Date(appointmentArray[i].appDate);
            if (aDate.getMonth() == monthSelected) {
                var I_D = appointmentArray[i].id;
                month = aDate.getMonth()+1
                day = aDate.getDate();
                name = appointmentArray[i].name;

                $("#month").append("<tr><td>" + month + "/" + day + "</td></tr>");
                $("#monTime").append("<tr><td>" + aDate.toLocaleTimeString() + "</td></tr>");
                $("#monName").append("<tr><td>" + name + "</td></tr>");
                $("#deleteApp").append("<tr><td><button type='button' class='btn btn-danger btn-sm popoover'" + i + "'' id='deleteAppointment' value='" + I_D + "'>Delete</button></td></tr>");
            }
        }
    };

$(document).on("click", "#deleteAppointment", deleteAppointmentHere);

    // --------------------------------------------------------------------
    // Function for handling what happens when the delete button is pressed
    function deleteAppointmentHere() {
        id = this.value;
        $.ajax({
          method: "DELETE",
          url: "/api/appointments/" + id
         }).done(function(){
            getAppointmentstwo();
        });
    }
 });// end of document.ready function
