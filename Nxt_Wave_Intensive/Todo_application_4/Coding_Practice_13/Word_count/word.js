let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];

let fnts = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];
let con = document.getElementById('wordsContainer');
for (let i of wordCloud) {
    let spn = document.createElement('span');
    spn.textContent = i;
    spn.style.marginRight = '20px';
    spn.style.fontSize = fnts[Math.ceil(Math.random() * (fnts.length - 1))] + 'px';
    con.appendChild(spn);
}

let btn = document.getElementById('addBtn');
let inp = document.getElementById('userInput');
let err = document.getElementById('errorMsg');

btn.onclick = function() {
    if (inp.value === '') {
        err.textContent = 'Please enter a word';
        return;
    }
    let spn = document.createElement('span');
    spn.textContent = inp.value;
    spn.style.marginRight = '20px';
    spn.style.fontSize = fnts[Math.ceil(Math.random() * (fnts.length - 1))] + 'px';
    con.appendChild(spn);
}
