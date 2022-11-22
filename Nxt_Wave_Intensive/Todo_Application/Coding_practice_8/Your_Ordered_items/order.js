let itemList = [{
        itemName: "Veg Biryani",
        uniqueNo: 1,
    },
    {
        itemName: "Chicken 65",
        uniqueNo: 2,
    },
    {
        itemName: "Paratha",
        uniqueNo: 3,
    }
];

let div = document.getElementById('orderedItemsContainer');

let h1 = document.createElement('h1');
h1.textContent = 'Your Ordered Items';
div.appendChild(h1);

let ul = document.createElement('ul');
div.appendChild(ul);

for (let i of itemList) {
    let li = document.createElement('li');
    li.id = 'item' + i.uniqueNo;
    li.style.listStyleType = 'none';
    let lbl = document.createElement('label');
    lbl.style.marginRight = '10px';
    lbl.textContent = i.itemName;
    li.appendChild(lbl);

    let button = document.createElement('button');
    button.id = 'button' + i.uniqueNo;
    button.textContent = 'Cancel';
    button.style.borderRadius = '5px';
    button.setAttribute('for', 'lbl.id');
    button.classList.add('btn-danger');
    li.appendChild(button);

    ul.appendChild(li);

    button.onclick = function() {
        ul.removeChild(li);
    };

}
