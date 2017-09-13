function authenticateAndEnter() {
    $('form#loginForm').submit();
}

$(document).ready(function() {
    $('#loginBtn').click(authenticateAndEnter)
})
