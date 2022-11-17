let bg = document.getElementById('bgColorInput');
let fc = document.getElementById('fontColorInput');
let fs = document.getElementById('fontSizeInput');
let fw = document.getElementById('fontWeightInput');
let pd = document.getElementById('paddingInput');
let bdr = document.getElementById('borderRadiusInput');

let cb = document.getElementById('customButton');
let ab = document.getElementById('applyButton');

ab.onclick = function() {
    cb.style.backgroundColor = bg.value;
    cb.style.color = fc.value;
    cb.style.fontSize = fs.value;
    cb.style.fontWeight = fw.value;
    cb.style.padding = pd.value;
    cb.style.borderRadius = bdr.value;
};
