document.getElementById('login-button').addEventListener('click', function () {
    // get user Email and Password
    const userEmail = document.getElementById('user-email').value;
    const userPassword = document.getElementById('user-password').value;

    // check the validity of email and password
    if (userEmail == 'abc@def.com' && userPassword == 'secret') {
        window.location.href = 'banking02.html';
        // console.log('valid user')
    };
})