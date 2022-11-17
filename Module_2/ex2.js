'use strict';

let namesList = [];
const target = document.getElementById('target');
const participants = Number(prompt('Enter number of participants: '));

for (let i = 0; i < participants; i++) {
    let names = prompt(`Enter a name of the participant ${i + 1}: `);
    namesList.push(names);
}

namesList.sort();

for (let i = 0; i < namesList.length; i++) {
    target.innerHTML += `<li>${namesList[i]}</li>`;
}
