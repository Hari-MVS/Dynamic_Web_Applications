let groceryList = ["Apples", "Boost Drink", "Butterscotch Ice Cream", "Tomato Ketchup", "Dairy Milk Chocolates", "Pasta"];

let h1 = document.createElement('h1');
h1.textContent = 'Grocery List';
h1.style.color = '#f5f9fd';
h1.style.fontStyle = 'Roboto';
h1.style.textAlign = 'center';

let div = document.createElement('div');

let ul = document.createElement('ul');
ul.style.backgroundColor = '#f5f9fd';
ul.style.borderRadius = '10px';
ul.style.padding = '35px';

div.appendChild(ul);

for (let i of groceryList) {
    let li = document.createElement('li');
    li.textContent = i;
    ul.appendChild(li);

}





let con = document.getElementById('groceryListContainer');
con.style.backgroundColor = '#03254c';
con.style.height = '100vh';
con.style.padding = '30px';

con.appendChild(h1);
con.appendChild(div);
