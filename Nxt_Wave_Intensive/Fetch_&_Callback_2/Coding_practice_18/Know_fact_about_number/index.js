let user = document.getElementById('userInput');
let par = document.getElementById('fact');
let spin = document.getElementById('spinner');

function res() {
    spin.classList.remove('d-none');
    let url = 'https://apis.ccbp.in/numbers-fact?number=' + user.value;
    let options = {
        method: 'GET'
    };
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            spin.classList.add('d-none');
            par.textContent = data.fact;
        });
}

user.addEventListener('keyup', res);
