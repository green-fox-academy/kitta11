'use strict';
export { };
// Read all data from 'log.txt'.
// Each line represents a log message from a web server

const fs = require('fs');
const charEncoding: string = 'utf8'

//general functions to read and write a file
function readFromFile(filename: string): string {
  return fs.readFileSync(filename, charEncoding);
}

// Write a function that returns an array with the unique IP adresses.

function getUniqueIPAddress(filename: string) {
  // let fileContent: string = readFromFile(filename);
  //match method returns with an array so we dont have to push the match results into the other array too!!!!
  let ipArray: any[] = readFromFile(filename).match(/([0-9]{1,3}[\.]){3}[0-9]{1,3}/ig);
  let uniqueIpArray: string[] = [];
  // this filter solution tests whether an element index and the given value indexOf return value is the same
  uniqueIpArray = ipArray.filter(function (value, index, self) {
    return self.indexOf(value) === index;
  });
  return uniqueIpArray;
}

console.log(getUniqueIPAddress('log.txt'));
console.log(getUniqueIPAddress('log2.txt'));

// Write a function that returns the GET / POST request ratio.

function getPostRatio(filename: string) {
  let fileContentArray: any[] = readFromFile(filename).split('\n');
  let getCount: number = 0;
  let postCount: number = 0;
  fileContentArray.forEach(element => {
    if (element.toString().match(/GET/) === null) {
      postCount++;
    } else {
      getCount++;
    }
  })
  console.log(postCount);
  console.log(getCount);
  return getCount / postCount;
}

console.log(getPostRatio('log.txt'));
console.log(getPostRatio('log2.txt'));
//should return 3/7 = 0.42


