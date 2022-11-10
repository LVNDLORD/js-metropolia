'use strict';

let draw;
let studentName = prompt('Please enter your name.');
let choice = Math.floor(Math.random() * 4 + 1);

switch (choice) {
    case 1:
        draw = 'Daredevil';
        break;

    case 2:
        draw = 'Slytherin';
        break;

    case 3:
        draw = 'Hufflepuff';
        break;

    case 4:
        draw = 'Ravenclaw';
        break;
}

document.getElementById('target').innerHTML = `${studentName}, you are ${draw}.`;