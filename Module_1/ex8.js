'use strict';

let startYear = Number(prompt('Enter start year'));
let endYear = Number(prompt('Enter end year'));
let ul = document.getElementById('target');

const printLeap = function (startYear, endYear) {

    for (let i = startYear; i <= endYear; i++) {
        if ((i % 4 == 0) && (i % 100 !== 0) || (i % 400 == 0)) {
            ul.innerHTML += `<li>${i}</li>`;
        }
    }
}

printLeap(startYear, endYear);