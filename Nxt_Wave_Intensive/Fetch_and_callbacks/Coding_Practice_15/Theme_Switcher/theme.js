let bg = document.getElementById('bgContainer');
let head = document.getElementById('heading');
let inp = document.getElementById('themeUserInput');


function keyy(event) {
    if (inp.value === 'Dark' && event.key === 'Enter') {
        bg.classList.add('dark-container');
        head.classList.add('dark-heading');
        bg.classList.remove('bg-container');
        head.classList.remove('heading');
    } else if (inp.value === 'Light' && event.key === 'Enter') {
        bg.classList.remove('dark-container');
        head.classList.remove('dark-heading');
        bg.classList.add('bg-container');
        head.classList.add('heading');
    } else if (event.key === 'Enter') {
        alert('Enter the valid theme');

    }
}
inp.addEventListener('keydown', keyy);
