"use strict";
var num1 = document.getElementById('num1'), num2 = document.getElementById('num2'), btn = document.querySelector('button'), p = document.getElementById('paragraph');
var numResults = [];
var stringResults = [];
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + " " + num2;
    }
    return +num1 + +num2;
}
function printObj(resultObj) {
    console.log(resultObj.val);
}
btn.addEventListener('click', function () {
    var val1 = num1.value, val2 = num2.value;
    var result = add(+val1, +val2);
    var stringResult = add(val1, val2);
    numResults.push(result);
    stringResults.push(stringResult);
    printObj({ val: result, timestamp: new Date() });
    console.log(numResults, stringResults);
});
