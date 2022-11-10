'use strict';

let startYear = Number(prompt('Enter start year'));
let endYear = Number(prompt('Enter end year'));
let ul = document.getElementById('target');



function newLi() {
    let li = document.createElement('li');
    return li;
    }


const printLeap = function (startYear, endYear) {

    for (let i = startYear; i <= endYear; i++) {
        if ((i % 4 == 0) && (i % 100 !== 0) || (i % 400 == 0)) {
            console.log(i);
            newLi().appendChild(document.createTextNode(`${i}`));
            ul.appendChild(li);
        }
    }
}

printLeap(startYear, endYear);