const form = document.getElementById('form');
const fName = document.getElementById('f-name');
const lName = document.getElementById('l-name');
const email = document.getElementById('email');
const password = document.getElementById('pswd');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // get values from inputs
    const fNameValue = fName.value.trim();
    const lNameValue = lName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (fNameValue === '') {
        setError(fName, "First Name cannot be empty");
    } else {
        setSuccess(fName);
    }

    if (lNameValue === '') {
        setError(lName, "Last Name cannot be empty");
    } else {
        setSuccess(lName);
    }

    if (emailValue === '') {
        setError(email, "Email cannot be empty");
    } else if (!isEmail(emailValue)) {
        setError(email, "Looks like this is not an email");
        email.style.color = "hsl(0, 100%, 74%)";
    } else {
        setSuccess(email);
    }
    
    if (passwordValue === '') {
        setError(password, "Password cannot be empty");
    } else {
        setSuccess(password);
    }
}

function setError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    const img = formControl.querySelector('img');

    //add error message inside small
    small.innerText = message;

    //add error class
    small.classList.add('error')
    img.classList.add('error')
}

function setSuccess(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    const img = formControl.querySelector('img');

    input.style.color = "black"

    // remove error class
    small.classList.remove('error')
    img.classList.remove('error')
}

function isEmail (email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}