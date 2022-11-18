'use strict';

const target = document.getElementById('target');
target.setAttribute('class', 'my-list');
let items = ['First item', 'Second item', 'Third Item'];
let li = [];

const createList = function (numListItems) {
    for (let i = 0; i < numListItems; i++) {
        li[i] = document.createElement('li');
        target.appendChild(li[i]);
        li[i].innerHTML = `${items[i]}`;
    }
}

createList(3);
