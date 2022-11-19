let checkcon = document.getElementById('checkboxWithLabelContainer');
checkcon.classList.add('text-center', 'p-5');

let inp = document.createElement('input');
inp.type = 'checkbox';
inp.id = 'checkbox';

let lbl = document.createElement('label');
lbl.setAttribute('for', 'checkbox');
lbl.textContent = 'Click Me!';
lbl.style.marginLeft = '5px';
lbl.id = 'checkboxLabel';


checkcon.appendChild(inp);
checkcon.appendChild(lbl);
