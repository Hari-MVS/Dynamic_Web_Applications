let hour = document.getElementById('hoursInput');
let minute = document.getElementById('minutesInput');
let button = document.getElementById('convertBtn');
let error = document.getElementById('errorMsg');
let seconds = document.getElementById('timeInSeconds');

function convert() {
    if (hour.value === '') {
        error.textContent = 'Please enter a valid number of hours';
        seconds.classList.add('d-none');
        return;
    }
    if (minute.value === '') {
        error.textContent = 'Please enter a valid number of minutes';
        seconds.classList.add('d-none');
        return;
    }
    error.textContent = '';
    let h = parseInt(hour.value);
    let m = parseInt(minute.value);
    let res = ((h * 60) + m) * 60;
    seconds.textContent = res + 's';
    seconds.classList.remove('d-none');
}

button.addEventListener('click', convert);
