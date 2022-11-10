'use strict';

let num1 = Number(prompt("Enter number 1."));
let num2 = Number(prompt("Enter number 2."));
let num3 = Number(prompt("Enter number 3."));

let sum = (num1 + num2 + num3);
let product = num1 * num2 * num3;
let avg = (sum / 3).toFixed(2);
document.getElementById('target').innerHTML = `The sum of entered numbers is ${sum},
                                            The product of entered numbers is ${product},
                                            The average of entered numbers is ${avg}.`;
