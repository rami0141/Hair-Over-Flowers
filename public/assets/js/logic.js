// fullpage.js
    $('#fullpage').fullpage();


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


 // clndr function for the calender
$(function() {
  $('#full-clndr').clndr();
});


 //form hide and triggered by appointment button
$('#appointmentForm').hide();

    var form = $('#appointmentForm');
    var calContent = $('#calendarSection');

$('#appointmentBtn').click( function(){
    calContent.fadeOut();
    form.fadeIn();
  });


  //Cancel button refresh fullpage
  var cancel = $('#cancelForm');

  cancel.click(function(){
    location.reload();
  });



  //submit button form refresh fullpage

  var submit = $('#submitForm');

  submit.click(function(){
    location.reload();
    // Temp message until we get the emailer running
    alert("Appointment Received, Thank you!");
  });

  //phone form 000-000-0000
//   $('form').on('submit', function(){
//
//     $(this).find('input[name="number"]').each(function(){
//         $(this).val() = $(this).val().replace(/-/g, '');
//     });
// });

