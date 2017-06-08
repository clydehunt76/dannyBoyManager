function validateLoginAndSubmit() {

    var errorOccurred = false;
    var emailRegex = '.+\@.+\..+';
    var passwordRegex = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{7,})';

    $('#loginEmailErrorMessage').removeClass('ErrorDisplay')
    $('#loginEmailErrorMessage').addClass('ErrorHidden')

    $('#loginPasswordErrorMessage').removeClass('ErrorDisplay')
    $('#loginPasswordErrorMessage').addClass('ErrorHidden')

    if (!$("#userIdEmail1").val().match(emailRegex)) {
        $('#loginEmailErrorMessage').html('Please provide a valid email address')
        $('#loginEmailErrorMessage').removeClass('ErrorHidden')
        $('#loginEmailErrorMessage').addClass('ErrorDisplay')
        errorOccurred = true;
    }

    if (!$("#passwordField1").val().match(passwordRegex)) {
        $('#loginPasswordErrorMessage').html('Please provide a password. Must be greater than 6 chars long and contain a mix of upper and lower case chars, and digits')
        $('#loginPasswordErrorMessage').removeClass('ErrorHidden')
        $('#loginPasswordErrorMessage').addClass('ErrorDisplay')
        errorOccurred = true;
  }
    if(!errorOccurred) {
      $('form#loginForm').submit();
    }
}

$(document).ready(function() {
    console.log("Initialising...");
    $('#loginBtn').click(validateLoginAndSubmit)
})
