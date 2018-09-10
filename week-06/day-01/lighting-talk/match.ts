'use strict'


let strTest: string = `A dream you dream alone is only a dream. 
A dream you dream together is reality`;


console.log(strTest.match(/dream/ig));
// [ 'dream', 'dream', 'dream', 'dream', 'dream' ]





// console.log(strTest.match( /dre(am)/ig));
// console.log(strTest.match( /dreamy/ig));
// console.log(strTest.match( /dream/i));
// console.log(strTest.match( /dre(am)/i));
