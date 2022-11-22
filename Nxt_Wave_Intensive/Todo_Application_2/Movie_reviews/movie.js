let div = document.getElementById('movieReviewsContainer');

let h4 = document.createElement('h4');
h4.textContent = 'MOVIE TITLE';
div.appendChild(h4);

let inp = document.createElement('input');
inp.type = 'text';
inp.id = 'titleInput';
inp.classList.add('col-12');
div.appendChild(inp);

let sech4 = document.createElement('h4');
sech4.textContent = 'YOUR REVIEW';
div.appendChild(sech4);

let text = document.createElement('textarea');
text.id = 'reviewTextarea';
text.classList.add('col-12');
div.appendChild(text);

let div2 = document.createElement('div');
div2.classList.add('text-right');
let btn = document.createElement('button');
btn.textContent = 'Add';
btn.classList.add('btn-primary');
btn.id = 'addBtn';
div2.appendChild(btn);

div.appendChild(div2);

let div3 = document.createElement('div');
div3.id = 'reviewsContainer';
div.appendChild(div3);

btn.onclick = function() {
    if (inp.value === '') {
        alert('enter the movie title');
        return
    }
    let rvh1 = document.createElement('h1');
    rvh1.textContent = 'Movie Title: ' + inp.value;
    div3.appendChild(rvh1);

    let rvp = document.createElement('p');
    rvp.textContent = 'review: ' + text.value;
    div3.appendChild(rvp);


    inp.value = '';
    text.value = '';
};
