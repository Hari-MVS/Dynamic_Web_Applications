let bikes = ["Hero", "Honda", "Bajaj", "Suzuki", "Yamaha"];
let person = {
    name: "Rahul",
    age: 25,
    gender: "Male",
};
let todos = [{
        todo: "Attending CCBP sessions",
        todoStatus: "Completed",
    },
    {
        todo: "Completing practice sets",
        todoStatus: "Not Completed",
    },
    {
        todo: "Asking doubts",
        todoStatus: "Completed",
    },
];

let list = [bikes, person, todos];
let div = document.getElementById('jsonContainer');

for (let items of list) {
    let itemjson = JSON.stringify(items);

    let div2 = document.createElement('div');
    div2.classList.add('col-12');
    div2.style.borderRadius = '8px';
    div2.style.padding = '8px';
    div2.style.marginBottom = '15px';
    div2.style.backgroundColor = '#f3f3f3';

    let span = document.createElement('span');
    span.textContent = itemjson;
    div2.appendChild(span);


    div.appendChild(div2);
}
