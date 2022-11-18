'use strict';

const target = document.getElementById('target');
const names = ['John', 'Paul', 'Jones'];
let li = [];

for (let i = 0; i < names.length; i++) {
    li[i] = document.createElement('li');
    target.appendChild(li[i]);
    li[i].appendChild(document.createTextNode(`${names[i]}`));
}
