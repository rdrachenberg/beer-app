$(document).ready(function() {
  // Getting references to our form and inputs
  var signInForm = $("#loginButton");
  var emailInput = $("input#loginEmail");
  var passwordInput = $("input#loginPassword");

  // When the form is submitted, we validate there's an email and password entered
  signInForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      name: nameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.name, userData.email, userData.password);
    nameInput.val("");
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(email, password) {
    $.post("/api/login", {
      name: name,
      email: email,
      password: password
    }).then(function(data) {
      window.location.replace(data);
      // If there's an error, log the error
    }).catch(function(err) {
      console.log(err);
    });
  }

});
