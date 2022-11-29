let para = document.getElementById('jokeText');
let btn = document.getElementById('jokeBtn');
let load = document.getElementById('spinner');

let url = 'https://apis.ccbp.in/jokes/random';

function joke() {
    load.classList.remove('d-none');
    let options = {
        method: 'GET'
    };
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            load.classList.add('d-none');
            para.textContent = data.value;
        });
}
btn.addEventListener('click', joke);
