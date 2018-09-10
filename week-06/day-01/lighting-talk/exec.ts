let strTestExec: string = `A dream you dream alone is only a dream. 
A dream you dream together is reality`;

let myRegexp = /dream/ig;
let arrayToCollect: any [] = []
let result;

//The loop continues until regexp.exec returns null that means “no more matches”.
while (result = myRegexp.exec(strTestExec)) {
  arrayToCollect.push(result.index)
} 

console.log(arrayToCollect)



