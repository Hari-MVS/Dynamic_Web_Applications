let btn = document.getElementById('submitBtn');
let para = document.getElementById('resultMsg');
let ques = document.getElementById('questionsForm');

let l;
ques.addEventListener('change', function(event) {
    l = event.target.value;
});

let res = function() {
    if (l === undefined) {
        para.textContent = 'Please select the answer!';
        para.style.color = 'red';
    } else if (l === 'Delhi') {
        para.textContent = 'Correct Answer!';
        para.style.color = 'green';
    } else {
        para.textContent = 'Wrong Answer!';
        para.style.color = 'red';
    }
    event.preventDefault();

};

btn.addEventListener('click', res);
