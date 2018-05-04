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
           sortAppointmentsByTime();
        });
      };
    // ---------------------------------------------------------------
    //This function will sort the appointments by time
    function sortAppointmentsByTime() {
        console.log(appointmentArray);
         function compare(a, b) {
            if (a.appTime > b.appTime)
                return 1;
            if (a.appTime < b.appTime)
                return -1
            return 0;
        }
        appointmentArray.sort(compare);
        appointmentArray.sort(function (a, b) { return (b.appTime > a.appTime) ? 1 : (a.appTime > b.appTime) ? -1 : 0 });
        loopingAppointments(appointmentArray);
    }

    // This will clear table data for an appointment that is deleted
    function clearTable() {
        $("#time").empty();
        $("#name").empty();
        $("#number").empty();
        $("#service").empty();
        $("#comments").empty();
        $("#button").empty();
        loopingAppointments(appointmentArray)
    }

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
                $("#name").append("<tr><td><i id='pop" + i + "'class='fas fa-comment fa-lg' title='comment'></i> " + name + "</td></tr>");
                $("#number").append("<tr><td>" + number + "</td></tr>");
                $("#service").append("<tr><td>" + service + "</td></tr>");              
                $("#comments").append("<div class='container'><h2 class='text-center'>Appointment - " + appTime + "</h2><div><h4 class='text-center'>" + name + " - " + email + " - " + service + "</h4></div><div class='commentStyle'><h4 class='text-center'>Comment: " + comments + "</h4></div></div><br><br>");               
                $("#button").append("<tr><td><input class='form-check-input delete' type='checkbox' id='defaultCheck1'><label class='form-check-label' for='defaultCheck1'>Check</label></td></tr>");          
            }
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
        }

    // -------------------------------------------------------------------
    // Pulls appointments for stylist
    function getAppointmentstwo() {
        $.get("/api/appointments/" + stylistName, function (data) {
            appointmentArray = data;
            appointmentsByMonth(monthSelected);
            clearTable();           
        });
      };

    // ------------------------------------------------------------------
    //Show appointments by month for each stylist
    $('select').on('change', getValue); 
    
    // This function grabs the value of the month selected
    function getValue() {
        monthSelected = this.value;
        appointmentsByMonth(monthSelected);
        console.log(monthSelected);
    };

   // Creates HTML for Appointments By Month Section 
   function appointmentsByMonth(monthSelected) {
        $("#month").empty();
        $("#monTime").empty();
        $("#monName").empty();
        $("#deleteApp").empty();     
        console.log("stylist", stylistName)

        for (var i = 0; i < appointmentArray.length; i++) {
            if (appointmentArray[i].appMonth == monthSelected) {
                newArr.push(appointmentArray[i]);

                var I_D = appointmentArray[i].id;
                appMonth = appointmentArray[i].appMonth;
                appDay = appointmentArray[i].appDay;
                appTime = appointmentArray[i].appTime;
                name = appointmentArray[i].name;
                $("#month").append("<tr><td>" + appMonth + "-" + appDay + "</td></tr>");
                $("#monTime").append("<tr><td>" + appTime + "</td></tr>");
                $("#monName").append("<tr><td>" + name + "</td></tr>");
                $("#deleteApp").append("<tr><td><button type='button' class='btn btn-danger btn-sm popoover'" + i + "'' id='deleteAppointment' value='" + I_D + "'>Delete</button></td></tr>");
            }
        }
    };

    // --------------------------------------------------------------------
    // Function for handling what happens when the delete button is pressed
    $(document).on("click", "#deleteAppointment", deleteAppointmentHere); 

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