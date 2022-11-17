'use strict';

let numbers = [];

while (true) {
    let inputNum = Number(prompt('Enter a number'));
    if (inputNum !== 0) {
        numbers.push(inputNum);
    } else {
        console.log(numbers.sort((a, b) => b - a));
        break;
    }
}