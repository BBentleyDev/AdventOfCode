const path = require('path');
const { readFileSync } = require('fs');

//get input data of groups of numbers separated by new lines.
const input = readFileSync(
  path.join(__dirname, "./input.txt")
).toString().trim();

//Part 1
for (let i = 0; i < input.length; i++) {
  //map to store characters in chunk
  let map = {}
  
  //create chunk of 4 characters
  let chunk = input.slice(i,i+4)

  //populate map with every char in chunk
  for (let char of chunk) {
    map[char] = true
  }

  //find number of keys in our map
  let mapSize = Object.keys(map).length

  //if mapSize is 4, all chars are unique and we have found our start pattern 
  //return length plus index of element chunk started at
  if (mapSize === 4) {
    console.log(i + mapSize)
    break
  }
}

//Part 2
//Same as above, but chunk size is 14 and instead using the Set object to determine number of unique characters
for (let i = 0; i < input.length; i++) {
  
  let chunk = input.slice(i,i+14)

  let set = new Set(chunk)

  if (set.size === 14) {
    console.log(i + set.size)
    break
  }
}
