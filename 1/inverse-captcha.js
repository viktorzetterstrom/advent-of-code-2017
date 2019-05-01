// Problem: https://adventofcode.com/2017/day/1

const fs = require('fs');
const numbers = fs
  .readFileSync('./input.txt')
  .toString()
  .split('')
  .map(numString => parseInt(numString));


const getNextElementWrap = (arr, n, step = 1) => {
  const next = (n + step) % arr.length;
  return arr[next];
};

const sum1 = numbers.reduce((accumulator, number, index) => {
  return number === getNextElementWrap(numbers, index)
    ? accumulator + number
    : accumulator;
}, 0);

const step = Math.floor(numbers.length / 2);
const sum2 = numbers.reduce((accumulator, number, index) => {
  return number === getNextElementWrap(numbers, index, step)
    ? accumulator + number
    : accumulator;
}, 0);

console.log('Part 1:', sum1);
console.log('Part 2:', sum2);