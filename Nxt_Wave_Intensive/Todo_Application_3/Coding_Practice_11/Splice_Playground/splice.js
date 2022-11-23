let arr = [1, 7, 3, 1, 0, 20, 77];

let start = document.getElementById('startIndexInput');
let del = document.getElementById('deleteCountInput');
let addinp = document.getElementById('itemToAddInput');
let spl = document.getElementById('spliceBtn');
let uparr = document.getElementById('updatedArray');

uparr.textContent = JSON.stringify(arr);

spl.onclick = function() {
    if (start.value === '') {
        alert('enter the start index');
    } else {
        if (del.value === '') {
            del.value = 0;
        }
        arr.splice(start.value, del.value, addinp.value);
        uparr.textContent = JSON.stringify(arr);
        start.value = '';
        del.value = '';
        addinp.value = '';
    }
}
