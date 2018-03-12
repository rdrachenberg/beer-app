var usersArr =[];
$('#registerButton').click(function(){
    event.preventDefault();
    var userName = $('#formName').val().trim();
    var userEmail = $('#formEmail').val().trim();
    var userPassword = $('#formPassword').val().trim();

    var user = {
        'userName': userName,
        'userEmail': userEmail,
        'userPassword': userPassword
    }

    console.table(user);

    usersArr.unshift(user);
    console.log(usersArr)

    document.getElementById("signUpForm").reset();
});

$('#loginButton').click(function(){
    event.preventDefault();
    var loginUserEmail = $('#loginEmail').val().trim();
    var loginUserPassword = $('#loginPassword').val().trim();

    var currentUser = {
        'userEmail' : loginUserEmail,
        'userPassword' : loginUserPassword
    }

    console.table(currentUser);

    console.log(loginUserEmail);
    console.log(loginUserPassword);

    document.getElementById('signInForm').reset();
});

 