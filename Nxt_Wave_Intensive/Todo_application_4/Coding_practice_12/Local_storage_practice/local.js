let msg = document.getElementById('msg');
let save = document.getElementById('saveBtn');
let clear = document.getElementById('clearBtn');

msg.value = localStorage.getItem('userInput');

save.onclick = function() {
    localStorage.setItem('userInput', msg.value);
}
clear.onclick = function() {
    msg.value = '';
    localStorage.removeItem('userInput');
}
