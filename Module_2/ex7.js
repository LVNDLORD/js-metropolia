'use strict';

const ul = document.createElement('ul');
ul.setAttribute('id', 'target');
document.body.appendChild(ul);
const target = document.getElementById('target');

const sides = Number(prompt('Enter number of sides on the dice: '));
const randomNum = (sides) => Math.floor((Math.random() * sides + 1));

while (true) {
    let random = randomNum(sides);
    if (random === sides) {
        target.innerHTML += `<li>${random}</li>`;
        break;
    } else {
        target.innerHTML += `<li>${random}</li>`;
        continue;
    }
}
