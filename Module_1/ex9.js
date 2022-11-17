'use strict';

let inputNum = Number(prompt("Enter number."));
let output = document.getElementById('target');
let prime = true;

if (inputNum < 2) {
    output.innerHTML = 'Number is invalid for testing';
} else {
    for (let i = 2; i < inputNum; i++) {
        if (inputNum % i == 0) {
            prime = false;
            break;
        }
    }
    output.innerHTML = `Number is ${prime ? '' : 'not'} prime`;
}
