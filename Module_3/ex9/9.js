'use strict';

const start = document.getElementById('start');
const result = document.getElementById('result');
let numbers;

const operation = () => {
    let calculation = document.getElementById('calculation').value;
    if (calculation.includes('+')) {
        numbers = calculation.split('+');
        result.innerHTML = Number(numbers[0]) + Number(numbers[1]);
    } else if (calculation.includes('-')) {
        numbers = calculation.split('-');
        result.innerHTML = Number(numbers[0]) - Number(numbers[1]);
    } else if (calculation.includes('/')) {
        numbers = calculation.split('/');
        result.innerHTML = (Number(numbers[0]) / Number(numbers[1])).toFixed(2);
    } else if (calculation.includes('*')) {
        numbers = calculation.split('*');
        result.innerHTML = Number(numbers[0]) * Number(numbers[1]);
    }
}

start.addEventListener('click', operation);