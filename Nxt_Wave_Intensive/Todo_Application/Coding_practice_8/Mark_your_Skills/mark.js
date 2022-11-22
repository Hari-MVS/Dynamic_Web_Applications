let skillList = [{
        skillName: "HTML",
        uniqueNo: 1,
    },
    {
        skillName: "CSS",
        uniqueNo: 2,
    },
    {
        skillName: "JavaScript",
        uniqueNo: 3,
    }
];

let div = document.getElementById('skillsContainer');

let h1 = document.createElement('h1');
h1.textContent = 'Mark your Skills';
div.appendChild(h1);

let ul = document.createElement('ul');
ul.style.margin = '0';
ul.style.padding = '0';
div.appendChild(ul);

for (let i of skillList) {

    let li = document.createElement('li');
    li.style.listStyleType = 'none';
    ul.appendChild(li);
    let inp = document.createElement('input');
    inp.type = 'checkbox';
    inp.id = 'checkbox' + i.uniqueNo;
    inp.style.marginRight = '4px';
    li.appendChild(inp);
    // console.log(inp);

    let lbl = document.createElement('label');
    lbl.setAttribute('for', inp.id);
    lbl.id = 'label' + i.uniqueNo;
    lbl.textContent = i.skillName;
    li.appendChild(lbl);
    // console.log(lbl)
    inp.onclick = function() {
        lbl.classList.toggle('decorate');
    }
};
