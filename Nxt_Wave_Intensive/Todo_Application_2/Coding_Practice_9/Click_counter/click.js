let btn = document.getElementById('incrementBtn');

let count = document.getElementById('counterValue');
let clicks = localStorage.getItem('clickCount');
// console.log(clicks)

if (clicks === null) {
    count.textContent = 0;
} else {
    count.textContent = clicks;
}

btn.onclick = function() {
    let inc = parseInt(count.textContent) + 1;

    localStorage.setItem('clickCount', inc);
    count.textContent = inc;

    // localStorage.clear()
}
