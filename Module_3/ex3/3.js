'use strict';

const target = document.getElementById('target');
const names = ['John', 'Paul', 'Jones'];

for (let i = 0; i < names.length; i++) {
    target.innerHTML += `<li>${names[i]}</li>`;
}

