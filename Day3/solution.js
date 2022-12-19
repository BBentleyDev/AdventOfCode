const path = require('path');
const { readFileSync } = require('fs');

//get input data of groups of numbers separated by new lines.
const input = readFileSync(
  path.join(__dirname, "./input.txt")
).toString().trim().split('\n');

//function for converting letters to their priority value
function letterToPriorityValue(letter) {
  if (letter === letter.toLowerCase()) {
    return letter.charCodeAt(0) - 96
  } else {
    return letter.charCodeAt(0) - 38
  }
}

//array for storing each rucksacks common item
let commonItems = []

//iterate through each rucksack and find the common item in both compartments
input.forEach( rucksack => {
  
  const midpoint = rucksack.length / 2
  const compartment1 = rucksack.slice(0,midpoint)
  const compartment2 = rucksack.slice(midpoint)

  const set1 = new Set(compartment1.split(''))
  const set2 = new Set(compartment2.split(''))

  for (let item of set1.values()) {
    if (set2.has(item)) {
      commonItems.push(item)
    }
  }

})

//convert commomItems to their priority values, calculate the sum, and print answer
let prioritySum = commonItems.map(item => letterToPriorityValue(item)).reduce( (a,c) => a + c, 0)

console.log(prioritySums)

//PART 2

//array for storing badge for each group of 3 elves
let badges = []

//iterate through elves, breaking them into groups of 3, find common item between all 3 elves
for (let i = 0; i < input.length; i += 3) {
  let group = input.slice(i,i+3)

  const set1 = new Set(group[0].split(''))
  const set2 = new Set(group[1].split(''))
  const set3 = new Set(group[2].split(''))

  for (let item of set1.values()) {
    if (set2.has(item) && set3.has(item)) {
      badges.push(item)
    }
  }
}

//convert badges to their priority values, calculate the sum, and print answer
let badgesSum = badges.map(badge => letterToPriorityValue(badge)).reduce( (a,c) => a + c, 0)

console.log(badgesSum)
