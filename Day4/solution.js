const path = require('path');
const { readFileSync } = require('fs');

//get input data of groups of numbers separated by new lines.
const input = readFileSync(
  path.join(__dirname, "./input.txt")
).toString().trim().split('\n');

//format data to be an array of arrays, each with 4 numbers representing the elves ranges
let data = input.map(pair => Array.from(pair.split(',').flatMap(range => range.split('-').map(Number))));

//Filter for instances where the one range in entirely contained within the other, print number of instances
const completelyOverlappingWork = data.filter(([lower1, higher1, lower2, higher2]) => {
  return (
    lower2 >= lower1 && higher2 <= higher1
    || lower1 >= lower2 && higher1 <= higher2
  )
}).length;

console.log(completelyOverlappingWork)

//part 2

//Filter for instances where one range is partially covered by the other, print number of instances
const partialOverlappingWork = data.filter(([lower1, higher1, lower2, higher2]) => {
  return (
    higher1 >= lower2 && higher2 >= lower1
  )
}).length;

console.log(partialOverlappingWork)