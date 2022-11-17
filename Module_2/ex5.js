'use strict';

let numbers = [];

while (true) {
    let num = Number(prompt('Enter a number.'));
    if (numbers.includes(num)) {
        alert("This number has already been given!");
        numbers.sort((a, b) => a - b);
        for (let num of numbers) {
            console.log(num);
        } break;
    } else {
        numbers.push(num);
    }
}