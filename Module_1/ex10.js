'use strict';

const numOfDice = Number(prompt('Enter number of dice'));
const numSum = Number(prompt('Enter sum'));
const output = document.getElementById('target');
let match = 0;
const testRepValue = 10_000;

const diceRoll = () => {
    return Math.floor(Math.random() * 6 + 1);
}

for (let i = 0; i <= testRepValue; i++) {
    let randomNum = 0;
    for (let j = 1; j <= numOfDice; j++) {
        randomNum += diceRoll();
    }
    if (randomNum == numSum) {
        match += 1;
    }
}

const probability = Number((match * 100 / testRepValue).toFixed(2));
output.innerHTML = `Probability to get sum ${numSum} with ${numOfDice} dice is ${probability}%`;
