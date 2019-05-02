// Problem: https://adventofcode.com/2017/day/6

const fs = require('fs');
const memoryBanks = fs
  .readFileSync('./input.txt')
  .toString()
  .split('\t')
  .map(str => parseInt(str));

const getMaxIndex = memoryBanks => memoryBanks.reduce(
  (maxIndex, value, index, arr) => {
  return value > arr[maxIndex]
    ? maxIndex = index
    : maxIndex;
}, 0);

const memoryInHistory = (memory, history) => {
  for (let entry of history)
    if (entry === JSON.stringify(memory))
      return true;

  return false;
};

let workingMemory = memoryBanks.slice();
let memoryHistory = [JSON.stringify(workingMemory)];
let steps1 = 0;

while (true) {
  steps1++;
  workingMemory = workingMemory.slice();
  let index = getMaxIndex(workingMemory);
  let memory = workingMemory[index];
  workingMemory[index] = 0;

  while (memory > 0) {
    index++;
    memory--;
    workingMemory[index % workingMemory.length]++;
  }

  if (memoryInHistory(workingMemory, memoryHistory)) {
    memoryHistory.push(JSON.stringify(workingMemory));
    break;
  } else {
    memoryHistory.push(JSON.stringify(workingMemory));
  }
}

const repeatingState = memoryHistory.slice(-1)[0];
const isRepeatingState = state => state === repeatingState;

const firstOccurence = memoryHistory.findIndex(isRepeatingState);
const repeatingStepLength = (memoryHistory.length - 1) - firstOccurence;

console.log('Part 1:', steps1);
console.log('Part 2:', repeatingStepLength);
