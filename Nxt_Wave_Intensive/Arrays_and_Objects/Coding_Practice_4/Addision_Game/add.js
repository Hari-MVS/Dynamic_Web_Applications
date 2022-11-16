let num1 = document.getElementById('firstNumber');
let num2 = document.getElementById('secondNumber');
let number1 = Math.ceil(Math.random() * 100);
let number2 = Math.ceil(Math.random() * 100);

let user = document.getElementById('userInput');
let para = document.getElementById('gameResult');
num1.textContent = number1;
num2.textContent = number2;

function check() {
    if (user.value === "") {
        para.textContent = 'Please Try Again!';
        para.style.backgroundColor = "#1e217c";
    } else if (number1 + number2 !== parseInt(user.value)) {
        para.textContent = 'Please Try Again!';
        para.style.backgroundColor = "#1e217c";
    } else if (number1 + number2 === parseInt(user.value)) {
        para.textContent = 'Congratulations! You got it right.';
        para.style.backgroundColor = "#028a0f";
    }
}

function restart() {
    number1 = Math.ceil(Math.random() * 100);
    number2 = Math.ceil(Math.random() * 100);
    num1.textContent = number1;
    num2.textContent = number2;
    user.value = "";
    para.textContent = '';
}
