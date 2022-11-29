let txt = document.getElementById('requestBody');
let btn = document.getElementById('sendPostRequestBtn');
let rqst = document.getElementById('requestStatus');
let para = document.getElementById('httpResponse');
let load = document.getElementById('loading');

let url = "https://gorest.co.in/public-api/users";

function pos() {
    load.classList.remove('d-none');
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer c3d87c0eec8cdb5aee4bd44b0f5711860f2c52d64acd4ec7e3b4705381d41672"
        },
        body: txt.value
    };
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            load.classList.add('d-none');
            rqst.textContent = data.code;
            para.textContent = JSON.stringify(data);
        });
}
btn.addEventListener('click', pos);
