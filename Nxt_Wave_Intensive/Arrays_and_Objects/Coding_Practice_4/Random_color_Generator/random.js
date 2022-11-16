let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];
let bgCon = document.getElementById('bgContainer');


function clickFunc() {
    let random = Math.ceil(Math.random() * (bgColorsArray.length - 1));
    console.log(bgColorsArray[random]);
    bgCon.style.backgroundColor = bgColorsArray[random];
}
