'use strict';

let numbers = [];

while (true) {
    let inputNum = Number(prompt('Enter a number'));
    if (inputNum !== 0) {
        numbers.push(inputNum);
    } else {
        numbers.sort((a, b) => b - a);
        for (let num of numbers) {
            console.log(num);
        }
        break;
    }
}