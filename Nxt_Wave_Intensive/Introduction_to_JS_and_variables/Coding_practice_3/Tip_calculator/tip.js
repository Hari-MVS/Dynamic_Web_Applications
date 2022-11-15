let bill = document.getElementById('billAmount');
let percentage = document.getElementById('percentageTip');
let tip = document.getElementById('tipAmount');
let total = document.getElementById('totalAmount');

let error = document.getElementById('errorMessage');

function calc() {
    if (bill.value === "") {
        error.textContent = 'Please Enter a Valid Input.';
    } else if (percentage.value === "") {
        error.textContent = 'Please Enter a Valid Input.';
    } else {
        error.textContent = "";
        let billAmount = parseInt(bill.value);
        let percentageTip = parseInt(percentage.value);

        let calculatedTip = (percentageTip / 100) * billAmount;
        let calculatedTotal = billAmount + calculatedTip;


        tip.value = calculatedTip;
        total.value = calculatedTotal;
    }

}
