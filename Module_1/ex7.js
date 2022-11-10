//Write a program that asks the user for the number of dice rolls. The program throws all the dice once and prints the sum of the numbers. (2p)
'use strict';

let diceRolls = Number(prompt('Enter number of dice rolls'));
let sum = 0;

for (let i = 0; i <= diceRolls; i++) {
    let roll = Math.floor(Math.random() * 6 + 1);
    console.log(roll);
    sum += roll;
}
document.getElementById('target').innerHTML = `The sum of all rolls is ${sum}`;