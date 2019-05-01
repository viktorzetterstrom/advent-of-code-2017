// Problem: https://adventofcode.com/2017/day/4
const fs = require('fs');

const input = fs
  .readFileSync('./input.txt')
  .toString()
  .split('\n')
  .map(row => row.split(' '));

const containsNoDuplicates = passphrase =>
  passphrase.length === new Set(passphrase).size;

const containsNoAnagram = (passphrase) => {
  let sortedWords = [];
  for (let word of passphrase)
    sortedWords.push(
      word.split('').sort().join('')
    );
  return containsNoDuplicates(sortedWords);
};


const validPhrases1 = input.reduce((count, passphrase) => {
  return containsNoDuplicates(passphrase)
    ? count += 1
    : count;
}, 0);

const validPhrases2 = input.reduce((count, passphrase) => {
  return containsNoAnagram(passphrase)
    ? count += 1
    : count;
}, 0);

console.log('Part 1:', validPhrases1);
console.log('Part 2:', validPhrases2);
