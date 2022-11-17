'use strict';

const ul = document.createElement('ul');
ul.setAttribute('id', 'target');
document.body.appendChild(ul);
const target = document.getElementById('target');

const randomNum = () => Math.floor((Math.random() * 6 + 1));

while (true) {
    let random = randomNum();
    if (random === 6) {
        target.innerHTML += `<li>${random}</li>`;
        break;
    } else {
        target.innerHTML += `<li>${random}</li>`;
        continue;
    }
}
