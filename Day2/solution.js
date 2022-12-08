const path = require('path');
const { readFileSync } = require('fs');

//get input data of groups of numbers separated by new lines.
const input = readFileSync(
  path.join(__dirname, "./input.txt")
).toString().trim();

//format input data
let games = input.split('\n').map( pair => pair.replace(' ',''));

//populate object with all possible outcomes & their corresponding score values
const possibleScores = {
  AX: 4,
  AY: 8,
  AZ: 3,
  BX: 1,
  BY: 5,
  BZ: 9,
  CX: 7,
  CY: 2,
  CZ: 6,
}

//Same but for part 2
const possibleScores2 = {
  AX: 3,
  AY: 4,
  AZ: 8,
  BX: 1,
  BY: 5,
  BZ: 9,
  CX: 2,
  CY: 6,
  CZ: 7,
};

//function for calculating total scores
const calcScores = (possibleScores, total = 0) => {
  total = 0
  games.forEach(game => total += possibleScores[game]);
  return total;
};

//Print results
console.log(calcScores(possibleScores))
console.log(calcScores(possibleScores2))