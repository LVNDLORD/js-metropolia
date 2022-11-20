'use strict';

const target = document.getElementById('target');
let items = ['First item', 'Second item', 'Third Item'];
let li = [];

const createList = function (numListItems) {
    for (let i = 0; i < numListItems; i++) {
        li[i] = document.createElement('li');
        target.appendChild(li[i]);
        li[i].appendChild(document.createTextNode(`${items[i]}`));
        if (i == 1) {
            li[i].setAttribute('class', 'my-item');
        }
    }
}

createList(3);
