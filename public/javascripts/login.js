function validateLoginAndSubmit() {
    var emailRegex = '.+\@.+\..+';

    $('#loginEmailErrorMessage').removeClass('ErrorDisplay')
    $('#loginEmailErrorMessage').addClass('ErrorHidden')

    if (!$("#userIdEmail1").val().match(emailRegex)) {
        $('#loginEmailErrorMessage').html('Please provide a valid email address')
        $('#loginEmailErrorMessage').removeClass('ErrorHidden')
        $('#loginEmailErrorMessage').addClass('ErrorDisplay')
    }
}

$(document).ready(function() {
    console.log("Initialising...");
    $('#loginBtn').click(validateLoginAndSubmit)
})
