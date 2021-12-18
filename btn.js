const form = document.getElementById("form");
const email = document.getElementById("email");
const message = document.querySelector("small");

form.addEventListener('submit', e => {
    e.preventDefault();
    validateForm();
})

email.addEventListener('keyup',validateForm);

function validateForm(){
    const emailValue = email.value.trim();
    if(!validateEmail(emailValue)){
        form.classList.add('error');
        form.classList.remove('success');
        message.innerHTML = 'Please provide a valid email';
    }else{
        form.classList.add('success');
        form.classList.remove('error');
        message.innerHTML = '';
    }
}

function validateEmail(input){
    const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi;
    return regExp.test(input);
}

