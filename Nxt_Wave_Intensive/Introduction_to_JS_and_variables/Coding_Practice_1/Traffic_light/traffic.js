let stop = document.getElementById('stopButton');
let ready = document.getElementById('readyButton');
let go = document.getElementById('goButton');

let stoplt = document.getElementById('stopLight');
let readylt = document.getElementById('readyLight');
let golt = document.getElementById('goLight');

function stopf() {
    stop.style.backgroundColor = '#cf1124';
    stoplt.style.backgroundColor = '#cf1124';
    ready.style.backgroundColor = '#4b5069';
    readylt.style.backgroundColor = '#4b5069';
    go.style.backgroundColor = '#4b5069';
    golt.style.backgroundColor = '#4b5069';
}

function readyf() {
    ready.style.backgroundColor = '#f7c948';
    readylt.style.backgroundColor = '#f7c948';
    stop.style.backgroundColor = '#4b5069';
    stoplt.style.backgroundColor = '#4b5069';
    go.style.backgroundColor = '#4b5069';
    golt.style.backgroundColor = '#4b5069';
}

function gof() {
    go.style.backgroundColor = '#199473';
    golt.style.backgroundColor = '#199473';
    ready.style.backgroundColor = '#4b5069';
    readylt.style.backgroundColor = '#4b5069';
    stop.style.backgroundColor = '#4b5069';
    stoplt.style.backgroundColor = '#4b5069';
}
