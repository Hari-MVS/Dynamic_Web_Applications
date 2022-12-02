let rqsturl = document.getElementById('requestUrl');
let rqstmd = document.getElementById('requestMethod');
let rqstmsg = document.getElementById('requestUrlErrMsg');
let rqstbd = document.getElementById('requestBody');
let rpsbd = document.getElementById('responseBody');
let rpsst = document.getElementById('responseStatus');
let btn = document.getElementById('sendRequestBtn');



rqsturl.addEventListener('blur', function(event) {
    let tem = event.target.value;
    if (tem === '') {
        rqstmsg.textContent = 'Required*';
    } else {
        rqstmsg.textContent = '';
    }
});
let tem = rqstmd.value;
rqstmd.addEventListener('change', function(event) {
    tem = event.target.value;
    // console.log(tem)
});

function res(event) {

    console.log(tem);
    if (tem === 'POST') {
        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: "Bearer c3d87c0eec8cdb5aee4bd44b0f5711860f2c52d64acd4ec7e3b4705381d41672"
            },
            body: rqstbd.value
        };
        fetch(rqsturl.value, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                rpsst.value = data.code;
                rpsbd.textContent = JSON.stringify(data);
            });
    } else if (tem === 'PUT') {
        let options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: "Bearer c3d87c0eec8cdb5aee4bd44b0f5711860f2c52d64acd4ec7e3b4705381d41672"
            },
            body: rqstbd.value
        };
        fetch(rqsturl.value, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                rpsst.value = data.code;
                rpsbd.textContent = JSON.stringify(data);
            });
    }
    event.preventDefault();
}
btn.addEventListener('click', res);
