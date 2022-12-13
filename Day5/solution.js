const path = require('path');
const { readFileSync } = require('fs');

//get input data of groups of numbers separated by new lines.
const input = readFileSync(
  path.join(__dirname, "./input.txt")
).toString().trim().split('\n');


const instructions = input.splice(10);
let stacks = require('./stacks');


const instructionNumbers = instructions.map( command => command.split(' ').filter( char => !isNaN(char)).map( number => +number) )

instructionNumbers.forEach ( instruction => {
  let [pop, from, to] = instruction
  
  for (let i = 0; i < pop; i++) {
    const crate = stacks[from].pop()
    stacks[to].push(crate)
  }
  
})

let topCrates = []

for (let i = 0; i < stacks.length; i++) {
  topCrates.push(stacks[i].pop())
}

console.log(topCrates.join(''))