let user = document.getElementById('userInput');
let ul = document.getElementById('keyCodeList');


function action(event) {
    let li = document.createElement('li');
    li.textContent = event.keyCode;
    ul.appendChild(li);
}
user.addEventListener('keydown', action);
