let addf = document.getElementById('addBtn');

let tem = document.getElementById('cartItemTextInput');

let ul = document.getElementById('ul');
addf.onclick = function(){
    if (tem.value !== ''){
        let li= document.createElement('li');
        li.textContent= tem.value;
        li.style.listStyleType='none';
        ul.appendChild(li);
    }
};




    
