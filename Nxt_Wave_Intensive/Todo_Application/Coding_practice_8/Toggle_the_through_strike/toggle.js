let div = document.getElementById('checkBoxWithLabelContainer');


let inp = document.createElement('input');
inp.type = 'checkbox';
inp.id = 'checkbox';
inp.style.marginRight = '4px';
div.appendChild(inp);

let lbl = document.createElement('label');
lbl.setAttribute('for', 'checkbox');
lbl.id = 'checkboxLabel';
lbl.textContent = 'I am a label';
div.appendChild(lbl);

inp.onclick = function() {
    lbl.classList.toggle('decorate');
};
