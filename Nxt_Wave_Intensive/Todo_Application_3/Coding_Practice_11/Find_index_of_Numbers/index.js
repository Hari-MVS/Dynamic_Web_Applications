let numbers = [17, 31, 77, 20, 63];

let inp = document.getElementById('userInput');
// let find =document.getElementById('findBtn');
let indx = document.getElementById('indexOfNumber');

function findIndexOfNumber() {
    if (inp.value === '') {
        alert('enter a number');
        return;
    }
    indx.textContent = numbers.findIndex(chk);

    function chk(i) {
        return i === parseInt(inp.value);
    }
    inp.value = '';
}
