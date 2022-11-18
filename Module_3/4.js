'use strict';

const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];
let option = [];

const target = document.getElementById('target');

for (let i = 0; i < students.length; i++) {
  option[i] = document.createElement('option');
  option[i].value = students[i]['id'];
  option[i].innerHTML = `${students[i]['name']}`;
  target.appendChild(option[i]);
}