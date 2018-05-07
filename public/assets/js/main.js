$(document).ready(function() { 
  // FORM SUBMISSION
  var name = $("#name");
  var phone = $("#phone");
  var email = $("#email");
  var serviceType = $("#serviceType");
  var appMonth = $("#appMonth");
  var appDay = $("#appDay");
  var appTime = $("#appTime");
  var stylist = $("#stylist");
  var comments = $("#comments");
  
  

  $(document).on("click", "#submitForm", handleFormSubmit);

  function handleFormSubmit() {
    event.preventDefault();
    var thisDate = new Date(2018,appMonth.val(),appDay.val(),appTime.val());
    // Constructing a newAppointment object to hand to the database
    var newAppointment = {
      name: name
        .val()
        .trim(),
      phone: phone
        .val()
        .trim(),
      email: email
        .val()
        .trim(),
      service: serviceType
        .val()
        .trim(),
      appDate: thisDate.toLocaleString(),
      stylist: stylist
        .val()
        .trim(),
      comments: comments
        .val()
    };

    // Will send data to the database
    $.post("/api/appointments", newAppointment).done(function (data) {
      //console.log("database post:", data);
    });
    document.getElementById("resetForm").reset();
  }
}); // end of document.ready function