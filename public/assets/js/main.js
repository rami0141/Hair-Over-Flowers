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
    // Wont submit the form if the name and number is missing
    // if (!name.val().trim() || !number.val().trim()) {
    //   return;
    // }

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
      appMonth: appMonth
        .val()
        .trim(),
      appDay: appDay
        .val()
        .trim(),
      appTime: appTime
        .val()
        .trim(),
      stylist: stylist
        .val()
        .trim(),
      comments: comments
        .val()
    };
    console.log(newAppointment);
    console.log(newAppointment.month);

    // Will send data to the database
    $.post("/api/appointments", newAppointment).done(function (data) {
      console.log("database post:", data);
    });
    document.getElementById("resetForm").reset();
  }
}); // end of document.ready function