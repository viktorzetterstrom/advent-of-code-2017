// Problem: https://adventofcode.com/2017/day/5

const fs = require('fs');

const list = fs
  .readFileSync('./input.txt')
  .toString()
  .split('\n')
  .map(num => parseInt(num));

const list2 = list.slice();

let position = 0;
let steps1 = 0;
while ((0 <= position) && (position < list.length)) {
  const step = list[position];
  list[position]++;
  position += step;
  steps1++;
}

position = 0;
let steps2 = 0;
while ((0 <= position) && (position < list2.length)) {
  const step = list2[position];
  list2[position] = step >= 3
    ? step - 1
    : step + 1;
  position += step;
  steps2++;
}

console.log('Part 1:', steps1);
console.log('Part 2:', steps2);
