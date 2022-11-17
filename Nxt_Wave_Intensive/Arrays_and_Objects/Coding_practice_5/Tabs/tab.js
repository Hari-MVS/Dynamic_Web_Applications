let ab = document.getElementById('aboutButton');
let tb = document.getElementById('timeToVisitButton');
let atb = document.getElementById('attractionsButton');

let at = document.getElementById('aboutTab');
let tt = document.getElementById('timeToVisitTab');
let att = document.getElementById('attractionsTab');

ab.onclick = function() {
    at.classList.remove('d-none');
    tt.classList.add('d-none');
    att.classList.add('d-none');
    
    ab.classList.add('selected-button');
    tb.classList.remove('selected-button');
    atb.classList.remove('selected-button');
    
}
tb.onclick = function() {
    tt.classList.remove('d-none');
    at.classList.add('d-none');
    att.classList.add('d-none');
    
    ab.classList.remove('selected-button');
    tb.classList.add('selected-button');
    atb.classList.remove('selected-button');
}
atb.onclick = function() {
    att.classList.remove('d-none');
    tt.classList.add('d-none');
    at.classList.add('d-none');
    
    ab.classList.remove('selected-button');
    tb.classList.remove('selected-button');
    atb.classList.add('selected-button');
}
