let ab = document.getElementById('aboutButton');
let tb = document.getElementById('timeToVisitButton');
let atb = document.getElementById('attractionsButton');

let at = document.getElementById('aboutTab');
let tt = document.getElementById('timeToVisitTab');
let att = document.getElementById('attractionsTab');

ab.onclick = function() {
    tt.classList.add('d-none');
    att.classList.add('d-none');
}
tb.onclick = function() {
    at.classList.add('d-none');
    att.classList.add('d-none');
}
atb.onclick = function() {

    tt.classList.add('d-none');
    at.classList.add('d-none');
}
