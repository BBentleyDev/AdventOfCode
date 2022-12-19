const path = require('path');
const { readFileSync } = require('fs');

//get input data of groups of numbers separated by new lines.
const input = readFileSync(
  path.join(__dirname, "./input.txt")
).toString().trim().split('\n');

//variables for instructions and imported stacks
const instructions = input.splice(10);
let stacks = require('./stacks');

//format instructions so each is an array of just the 3 relevant numbers. The number of crates to move, the source stack, and the destination stack
const instructionNumbers = instructions.map( command => command.split(' ').filter( char => !isNaN(char)).map( number => +number) )

//Move the crates between stacks based on each instruction
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

console.log(topOfStacks);

// Part 2
//Move the crates between stacks based on each instruction
instructionNumbers.forEach(instruction => {
  let [pop,from,to] = instruction
  from--
  to--

  let crates = stacks[from].splice(-pop);
  stacks[to].splice(stacks[to].length, 0, ...crates);
});

//Pop the top crate off each stack, combine to a single string and print result
const topOfStacks2 = stacks.map(stack => stack.pop()).reduce((a, c) => a + c);

console.log(topOfStacks2);
