var usersArr =[];
$('#registerButton').click(function(){
    event.preventDefault();
    var userName = $('#formName').val().trim();
    var userEmail = $('#formEmail').val().trim();
    var userPassword = $('#formPassword').val().trim();

    var user = {
        'name': userName,
        'email': userEmail,
        'password': userPassword
    }

    console.table(user);

    usersArr.unshift(user);
    console.log(usersArr)
    $.post('/api/user', user);
    document.getElementById("signUpForm").reset();
});

$('#loginButton').on("click", function(event){
    event.preventDefault();
    var loginName = $('#loginName').val().trim();
    var loginUserEmail = $('#loginEmail').val().trim();
    var loginUserPassword = $('#loginPassword').val().trim();

    var newUser = {
        'name' : loginName,
        'email' : loginUserEmail,
        'password' : loginUserPassword
    }

    $.post('/api/user', newUser), function(data){
        console.log(data);
    };
    
    // $.get('/search');
    

    document.getElementById('signInForm').reset();
});
