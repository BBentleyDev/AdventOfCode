const path = require('path');
const { readFileSync } = require('fs');

// Get input data of groups of numbers separated by blank lines.
const input = readFileSync(
    path.join(__dirname, "./input.txt")
  ).toString();

let caloriesPerElf = input.split('\n\n').map(group => { 
    return group
        .split('\n')
        .map(group => Number(group))
        .reduce( (total, calories) => total + calories)
})

const most = Math.max(...caloriesPerElf)

console.log(most)

