'use strict';

const target = document.getElementById('target');
const trigger = document.getElementById('trigger');

trigger.addEventListener('mouseover', () => {
    target.setAttribute('src', 'img/picB.jpg');
});

trigger.addEventListener('mouseout', () => {
    target.setAttribute('src', 'img/picA.jpg');
});

