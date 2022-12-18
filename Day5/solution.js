const path = require('path');
const { readFileSync } = require('fs');

//get input data of groups of numbers separated by new lines.
const input = readFileSync(
  path.join(__dirname, "./input.txt")
).toString().trim().split('\n');


const instructions = input.splice(10);
let stacks = require('./stacks');

const instructionNumbers = instructions.map( command => command.split(' ').filter( char => !isNaN(char)).map( number => +number) )


instructionNumbers.forEach (instruction => {
  let [pop,from,to] = instruction
  to--
  from--
  
  for (let i = 0; i < pop; i++) {
    let crate = stacks[from].pop()
    stacks[to].push(crate)
  }
  
})

const topOfStacks = stacks.map(stack => stack.pop()).reduce( (a,c) => a + c)

// Print answer to part one.
console.log(topOfStacks);

// Part 2
instructionNumbers.forEach(instruction => {
  let [pop,from,to] = instruction
  from--
  to--

  let crates = stacks[from].splice(-pop);
  stacks[to].splice(stacks[to].length, 0, ...crates);
});

const topOfStacks2 = stacks.map(stack => stack.pop()).reduce((a, c) => a + c);

// Print answer to part two.
console.log(topOfStacks2);