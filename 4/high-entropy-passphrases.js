// Problem: https://adventofcode.com/2017/day/4

const fs = require('fs');
const input = fs
  .readFileSync('./input.txt')
  .toString()
  .split('\n')
  .map(row => row.split(' '));

const containsNoDuplicates = (row) => {
  return row.length === new Set(row).size;
};

const validPhrases = input.reduce((count, row) => {
  return containsNoDuplicates(row)
    ? count += 1
    : count;
}, 0);

  console.log('Part 1:', input);