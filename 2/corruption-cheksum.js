// Problem: https://adventofcode.com/2017/day/2

const fs = require('fs');
const numbers = fs
  .readFileSync('./input.txt')
  .toString()
  .split('\n')
  .map(row => row.split('\t'))
  .map(row => row.map(number => parseInt(number)));

const sum1 = numbers.reduce((accumulator, row) => {
  const max = row.reduce((accumulator, item) => {
    return item > accumulator
      ? item
      :accumulator;
  }, -Infinity);

  const min = row.reduce((accumulator, item) => {
    return item < accumulator
      ? item
      :accumulator;
  }, Infinity);

  const difference = max - min;
  return accumulator += difference;
}, 0);


const sum2 = numbers.reduce((accumulator, row) => {
  for (let dividend = 0; dividend < row.length; dividend++)
    for (let divisor = 0; divisor < row.length; divisor++)
      if ((dividend !== divisor) && (row[dividend] % row[divisor] === 0))
        return accumulator += row[dividend] / row[divisor];
}, 0);

console.log('Part 1', sum1);
console.log('Part 2', sum2);