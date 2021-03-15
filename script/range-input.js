let range1 = document.querySelector('#range1').value
let range2 = document.querySelector('#range2').value

function showVal(newVal){
    document.querySelector('.range1').innerHTML = newVal;
    range1 = newVal
    rangeTotal(newVal, range2)
}

function showVal2(newVal){
    document.querySelector('.range2').innerHTML = newVal;
    range2 = newVal
    rangeTotal(newVal, range1)
}

function rangeTotal(newVal, newVal2) {
    let total = Math.round(newVal * newVal2);
    let outrez = (total+'').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    document.querySelector('.range-sum').innerHTML = `${outrez} Points`;
}
