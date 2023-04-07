
const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmp = document.getElementById('confirmp');
const mobile =document.getElementById('mobile');
form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // trim to remove the whitespaces
    var nameValue = name.value.trim();
    var passwordValue = password.value.trim();
    var confirmValue = confirmp.value.trim();
    var emailValue = email.value.trim();
    var mobileValue = mobile.value.trim();
    var nameErr = emailErr = mobileErr = passErr=true;

    if (nameValue === '') {
        setErrorFor(name, 'Please enter your name');
    } else {
        setSuccessFor(name);
        nameErr=false;
    }

    if (emailValue === '') {
        setErrorFor(email, 'Please enter your email');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email not valid');
    } else {
        setSuccessFor(email);
        emailErr=false;
    }
    if (mobileValue === '') {
        setErrorFor(mobile, 'Please enter your mobile');
    } else if (!isMobile(mobileValue)) {
        setErrorFor(mobile, 'Mobile not valid');
    } else {
        setSuccessFor(mobile);
        mobileErr=false;
    }
    if (passwordValue === '') {
        setErrorFor(password, 'Please enter password');
    } else if (!isPassword(passwordValue)) {
        setErrorFor(password, 'atleast one number, one uppercase, lowercase letter, and atleast 8 character');
    }else {
        setSuccessFor(password);
        passErr=false;
    }
    if (confirmValue === '') {
        setErrorFor(confirmp, 'Please re-enter password');
    } else if (!isConfirm(confirmValue)) {
        setErrorFor(confirmp, 'Invalid password');
    }else if (passwordValue !== confirmValue) {
        setErrorFor(confirmp, 'Passwords does not match');
    } else {
        setSuccessFor(confirmp);
    }
    if ((nameErr || emailErr || mobileErr || passErr) == true) {
        return false;
    } 
    else {

        var dataPreview = "You've entered the following details: \n" +
            "Full Name: " + nameValue + "\n" +
            "Email Address: " + emailValue + "\n" +
            "Mobile Number: " + mobileValue + "\n" ;

        alert(dataPreview);
        open("main.html");
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function isMobile(mobile){
    return /^[1-9]\d{9}$/.test(mobile);
}
function isPassword(password){  
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
}

function isConfirm(confirmp){  
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(confirmp);
}
