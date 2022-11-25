let txt = document.getElementById('timerText');

let id;

function btnn(tem) {
    clearInterval(id);
    txt.textContent = tem + ' seconds left';
    let fun = function() {
        if (tem > 1) {
            tem -= 1;
            txt.textContent = tem + ' seconds left';
        } else {
            clearInterval(id);
            txt.textContent = 'Your moment is complete';
        }
    };
    id = setInterval(fun, 1000);
}


// twenty.onclick = btnn();
// thirty.onclick = btnn(thirty.value);
// fourty.onclick = btnn(fourty.value);
// one.onclick = btnn(one.value);
