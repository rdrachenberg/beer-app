var usersArr =[];
$('#registerButton').click(function(){
    event.preventDefault();
    var userName = $('#formName').val().trim();
    var userEmail = $('#formEmail').val().trim();
    var userPassword = $('#formPassword').val().trim();

    var newUser = {
        'name': userName,
        'email': userEmail,
        'password': userPassword
    }

    console.table(newUser);

    usersArr.unshift(newUser);
    console.log(usersArr)
    // $.post('/api/user', user);
    
    $.post('/api/user', newUser), function(data){
        console.log(data);
        window.location.replace("/search");
    };
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

    window.location.replace('/search');
    // $.get('/search');
    
    localStorage.setItem("storedFromLandingPage", newUser.name);  


    document.getElementById('signInForm').reset();
});