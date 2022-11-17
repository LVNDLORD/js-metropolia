'use strict';

const numDogs = 6;
let dogNames = [];

const ul = document.createElement('ul');
ul.setAttribute('id', 'target');
document.body.appendChild(ul);
const target = document.getElementById('target');

for (let i = 0; i < numDogs; i++) {
    let dog = prompt(`Enter name of dog ${i + 1} out of ${numDogs}:`);
    const capitalized = dog.charAt(0).toUpperCase() + dog.slice(1);
    dogNames.push(capitalized);
}

dogNames.sort().reverse();

for (let i = 0; i < dogNames.length; i++) {
    target.innerHTML += `<li>${dogNames[i]}</li>`;
}
