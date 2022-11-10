'use strict';

let i = Number(prompt('Enter a year.'));

if ((i % 4 == 0) && (i % 100 !== 0) || (i % 400 == 0)) {
    document.getElementById('target').innerHTML = `${i} is a leap year`;
} else {
    document.getElementById('target').innerHTML = `${i} is not a leap year`;
}
