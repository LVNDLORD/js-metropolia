'use strict';

// Write a program that asks for the names of six dogs. The program prints dog names to unordered list <ul> in reverse alphabetical order. (2p)
const numDogs = 6;
let dogNames = [];

const ul = document.createElement('ul');
ul.setAttribute('id', 'target');
document.body.appendChild(ul);
const target = document.getElementById('target');

for (let i = 0; i < numDogs; i++) {
    let dog = prompt(`Enter name of dog ${i + 1} out of ${numDogs}:`);
    dogNames.push(dog);
}

dogNames.sort().reverse();

for (let i = 0; i < dogNames.length; i++) {
    target.innerHTML += `<li>${dogNames[i]}</li>`;
}
