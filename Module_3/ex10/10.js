'use strict';

const form = document.getElementById('source');
const firstName = document.querySelector('input[name="firstname"]');
const lastName = document.querySelector('input[name="lastname"]');
const p = document.getElementById('target');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    p.innerText = `Your name is ${firstName.value} ${lastName.value}`;
})

