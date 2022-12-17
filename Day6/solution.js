const path = require('path');
const { readFileSync } = require('fs');

//get input data of groups of numbers separated by new lines.
const input = readFileSync(
  path.join(__dirname, "./input.txt")
).toString().trim();

//Part 1
for (let i = 0; i < input.length; i++) {
  let map = {}
  
  let chunk = input.slice(i,i+4)

  for (let char of chunk) {
    map[char] = true
  }

  let mapSize = Object.keys(map).length

  if (mapSize === 4) {
    console.log(i + mapSize)
    break
  }
}