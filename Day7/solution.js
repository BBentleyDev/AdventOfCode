const path = require('path');
const { readFileSync } = require('fs');

//get input data of groups of numbers separated by new lines.
const input = readFileSync(
  path.join(__dirname, "./input.txt")
).toString().trim();

const lines = input.split('\n');

//create a store for individual directory sizes
let directories = [];

function walkDirectory(lines) {
  let inDir = [];
  let depth = 0;

  //collect lines until directory exited to original depth
  lines.some(line => {
    if (line.substring(0, 4) === '$ cd' && line.substring(0, 7) !== '$ cd ..') depth++;
    if (line.substring(0, 7) === '$ cd ..') {
      if (depth === 0) return true;
      depth--;
    }
    inDir.push(line);
  });

  //filter directory listing to just files, return filesize portion and total
  const size = inDir.map(item => parseInt(item.split(' ')[0])).filter(Number).reduce((a, c) => a + c);
  // console.log(size);
  return size;
}

lines.forEach((line, index, lines) => {
  //when an ls is encountered, send all following lines to walker function
  //walker function returns total size of all files in this directory and children
  //push directory size to directories store
  if (line.substring(0, 4) === '$ ls') {
    const remainingLines = lines.slice(++index);
    const dirSize = walkDirectory(remainingLines);
    directories.push(dirSize);
  }
});

//filter directories to all with total size under 100000 and total
//print answer to part one
const part1 = directories.filter(size => size <= 100000).reduce((a, c) => a + c);
console.log(part1);

const diskSize = 70000000;
const requiredSpace = 30000000;
const usedSpace = directories[0];
const unusedSpace = diskSize - usedSpace;
const extraSpaceNeeded = requiredSpace - unusedSpace;

//remove root from directories store as we can't delete everything
directories.shift();

//filter directories which are candidates for deletion
const possibleDirs = directories.filter(size => size >= extraSpaceNeeded);

//find the smallest possible candidate directory
//print answer to part two
const smallest = Math.min(...possibleDirs);
console.log(smallest);
