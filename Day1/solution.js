const path = require('path');
const { readFileSync } = require('fs');

// Get input data of groups of numbers separated by blank lines.
const input = readFileSync(
  path.join(__dirname, "./input.txt")
).toString().trim().split('\n\n');

//calculate the total calories carried by each elf
let caloriesPerElf = input.map(group => {
  return group
    .split('\n')
    .map(item => Number(item))
    .reduce((total, calories) => total + calories, 0)
})
  .sort((a, b) => b - a)

//Find the elf carrying the most calories
const most = caloriesPerElf[0]

//Print answer
console.log(most)


//PART 2

//Print the total calories of first three elves
console.log(caloriesPerElf[0] + caloriesPerElf[1] + caloriesPerElf[2])

