let from = document.getElementById('fromUserInput');
let to = document.getElementById('toUserInput');
let btn = document.getElementById('startBtn');
let txt = document.getElementById('counterText');

btn.onclick = function() {
    txt.textContent = from.value;
    let tem = parseInt(from.value);
    if (from.value === '') {
        alert('Enter the from value');
        return;
    }
    if (to.value === '') {
        alert('Enter the to value');
        return;
    }
    let fun = function() {
        if (tem < parseInt(to.value)) {
            tem += 1;
            txt.textContent = tem;
        } else {
            clearInterval(id);
        }
    };
    let id = setInterval(fun, 1000);
};
