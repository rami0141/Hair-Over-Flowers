  console.log('connected');

    // fullpage.js
    $('#fullpage').fullpage();

    // moment.js
    var today = $('#today');
    var getDate = moment().format('MMMM Do YYYY, h:mm a');

    today.text(getDate);

    // hello messgae on user page
    function message() {
        var greeting;
        var today = new Date().getHours();
          if (today < 12) {
            greeting = "Good Morning!";
          } else if (today >= 12 && today<= 17) {
            greeting = "Good Afternoon!";
          } else {
            greeting = "Good Evening!";
        };

        document.getElementById("helloMessage").innerHTML = greeting;
    };

message();

// clndr function
$(function() {
 $('#calendar').clndr({
 template: $('#calendar-template').html(),
 });
});

//form hide and triggered by button
$('#appointmentForm').hide();

  var form = $('#appointmentForm');
  var calContent = $('#calendarSection');

$('#appointmentBtn').click( function(){
    calContent.fadeOut();
    form.fadeIn();
  });
