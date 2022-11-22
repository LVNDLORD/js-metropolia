'use strict';
/*
// old style callbacks and new way - using Promises 

// classic callback is addEventListener
const button = document.querySelector('button');

const alertMe = () => {
    console.log('button clicked');
}

// second paramether after click is considered to be a async callback
button.addEventListener('click', alertMe);
// when we pass a callback function to another function or method, we are passing only the function's reference as an argument 
// callback funct not executed immediately. Its called back asyncronously. Somewhere inside the containing function
// containing function will be executed callback when the time comes

*/

// great example of callback , as image displayed(createImage) only once all of (showImage) is completed
function showImage(url, type, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = type;

    xhr.onload = function() {
        callback(xhr.response);
    }
    xhr.send();
}

function createImage(blob) {
    const objectURL = URL.createObjectURL(blob);
    const imageElement = document.createElement('img');
    imageElement.src = objectURL;
    document.body.appendChild(imageElement);
}

showImage('https://unsplash.com/photos/04X1Yp9hNH8', 'blob', createImage);

/*
function add(alertMe) {
    // some code here
    callback()  - putting function inside another function in order to be called later
}
*/