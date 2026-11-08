'use strict';

const first = parseInt(prompt('Enter the first integer:'));
const second = parseInt(prompt('Enter the second integer:'));
const third = parseInt(prompt('Enter the third integer:'));

const sum = first + second + third;
const product = first * second * third;
const average = sum / 3;

document.querySelector('#sum').textContent = `Sum: ${sum}`;
document.querySelector('#product').textContent = `Product: ${product}`;
document.querySelector('#average').textContent = `Average: ${average.toFixed(2)}`;
