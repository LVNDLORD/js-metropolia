'use strict';
/*
callback

getProfile((profile) ={
    getUse(country, (user) => {
        getName(user,(name) => {
            ...
        })
    })
})

*/


/*
Promise

getProfile()
    .then(getUser)
    .then(getName)
    .then(() => console.log(`done`))
    .catch((e) => console.log(err))

fetch()     // example of a promise. Modern equivalent of XMLHttpRequest
*/

/*
fetch('https://restcountries.com/v2/all')
    .then(function(response) {
        return response.json()
    }).then(function(json) {
        let countries = json;
        console.log(countries);
    }).catch(function(err) {
        console.log('errors:' + err.message);
    })
// same
*/

// fetch takes 1 param which is url

const flag = document.createElement('img');
document.body.appendChild(flag);

console.log('start');
fetch('https://restcountries.com/v2/all')
    .then(response => {
        return response.json()      // same as JSON.parse(this.response);
    }).then(json => {
        flag.src = json[0].flag;    // getting flag of the firs object that is returned
        console.log('Flag added');
    }).catch(err => {
        console.log('errors:' + err.message);
    })

    console.log('done!');




/* Com
Promise - object returing the complition or failiar of an async operation
'browsers reply - I promise I will get back to you asap'

.then - contains callback function that will run if the previous operation succeeded.
when that is completed, we move to the next the block 

.then(json=>) - contains callback function that getting a return from the previous succesfull operation
and the n assign it to the variable countries

Each then block returning another promise
in othher words  multiple async operation are put in the even queue
this even queue will run after the main thread has finished processing

.catch block at the end, and when any of the .then blocks fail, it returns an error


returning promise
let promise = fetch('https://restcountries.com/v2/all')
console.log(response)       // Promise {<pending>}
*/    

const button = document.querySelector('button');

console.log('Let\'s go!');

button.addEventListener('click', () =>{
    console.log('button clicked');
})

console.log('Done');

/*
Promises are  kinda similar to callbacks, as they are a returned object which you attach callback functions
rather that having to pass callbacks into a function however they have a bunch of extra press

promises are specifically made for handling async operations
we can chain multiple asuyn operations with .then operators
doing smth like this with callbacks is much harder

promise callbacks are always called in a strict order they are placed in the even queue.
error handling is also much better due to catch block

promises also avoid inversion of control unlike callbacks which loose full control of how functions will be executed
when passing a callback to a third-party library.
*/