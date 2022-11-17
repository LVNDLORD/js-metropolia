'use strict';

const nums = [1, 4, 5, 9, 7, 8, 2];

const even = (array) => {
    let evenArray = [];
    for (let value of array) {
        if (value % 2 === 0) {
            evenArray.push(value);
        }
    }
    return evenArray;
}


let newArr = even(nums);

console.log('Modified array');
console.log(newArr);
console.log('Original array');
console.log(nums);
