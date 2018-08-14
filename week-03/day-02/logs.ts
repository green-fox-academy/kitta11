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

function getIPAddress(filename: string) {
  let fileContentArray: any[] = readFromFile(filename).split('\n');
  let ipArray: any[] = [];
  fileContentArray.forEach(element => {
    //Regular Expression to Match IP Addresses: ([0-9]{1,3}[\.]){3}[0-9]{1,3}
    //https://javascript.info/regexp-methods When there’s a "g" flag, then str.match returns an array of all matches
    ipArray.push(element.toString().match(/([0-9]{1,3}[\.]){3}[0-9]{1,3}/ig));
  });
  return ipArray;
}

//console.log(getIPAddress('log.txt'));
console.log(getIPAddress('log2.txt'));


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
return getCount/postCount;
}

//console.log(getPostRatio('log.txt'));

console.log(getPostRatio('log2.txt'));
//should return 3/7 = 0.42


