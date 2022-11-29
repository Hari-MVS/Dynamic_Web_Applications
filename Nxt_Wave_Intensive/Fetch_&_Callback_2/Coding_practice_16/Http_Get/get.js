let btn = document.getElementById('sendGetRequestBtn');
let rqst = document.getElementById('requestStatus');
let rps = document.getElementById('httpResponse');
let load = document.getElementById('loading');

let url = 'https://gorest.co.in/public-api/users';
let options = {
    method: 'GET'
};

function send() {
    load.classList.remove('d-none');
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            load.classList.add('d-none');
            rqst.textContent = data.code;
            rps.textContent = JSON.stringify(data);
        });
}

btn.addEventListener('click', send);
