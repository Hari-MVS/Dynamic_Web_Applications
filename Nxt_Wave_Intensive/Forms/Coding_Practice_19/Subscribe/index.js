let namee = document.getElementById('name');
let email = document.getElementById('email');
let err = document.getElementById('nameErrMsg');
let emerr = document.getElementById('emailErrMsg');
let btn = document.getElementById('button');

namee.addEventListener('blur', function(event) {
    if (event.target.value === '') {
        err.textContent = "Required*";
    } else {
        err.textContent = "";
    }
})

email.addEventListener('blur', function(event) {
    if (event.target.value === '') {
        emerr.textContent = "Required*";
    } else {
        emerr.textContent = "";
    }
})

let form = document.getElementById('subscribeForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
})
