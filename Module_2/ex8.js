'use strict';

const p = document.createElement('p');
document.body.appendChild(p);
const arr = ['Johnny', 'DeeDee', 'Joey', 'Marky'];
let joinedString = '';

const concat = (array) => {
    for (let value of array) {
        joinedString += value;
    }
    p.innerHTML = joinedString;

}

concat(arr); // JohnnyDeeDeeJoeyMarky