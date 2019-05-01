// Problem: https://adventofcode.com/2017/day/3

const fs = require('fs');
const input = parseInt(fs
  .readFileSync('./input.txt')
  .toString());

const spiral = [].fill