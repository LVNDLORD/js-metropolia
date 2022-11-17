'use strict';

let numbers = [];

for (let i = 0; i < 5; i++) {
    let inputNum = Number(prompt(`Enter number ${i + 1}:`));
    numbers.push(inputNum);
}

for (let i = numbers.length; i > 0; i--) {
    console.log(numbers[i - 1]);
}
