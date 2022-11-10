'use strict';

const answer = confirm("Should I calculate the square root?");

if (!answer) {
    document.getElementById('target').innerHTML = `The square root is not calculated.`;
}

if (answer) {
    let num = Number(prompt('Enter a number to calculate the square root.'));
    if (num > 0) {
        let root = Math.sqrt(num);
        document.getElementById('target').innerHTML = `Square root of ${num} is ${root}`;
    } else {
        document.getElementById('target').innerHTML = `The square root is not calculated.`;
    }
}
