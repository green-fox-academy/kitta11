let myRegexp = /kitta/;
let testString = 'The lighting talk by kitta is a little confusing'
console.log(myRegexp.test(testString)) //true

let myBonyiRegexp = /\d{1,2}-\d{1,2}-\d{4}/;
testString = `Today's (9-10-2018) lighting talk by kitta is a little confusing`
console.log(myBonyiRegexp.test(testString)) //true

let myBonyiRegexp2 = /\d{2}-\d{2}-\d{4}/;
testString = `Today's (9-10-2018) lighting talk by kitta is a little confusing`
console.log(myBonyiRegexp2.test(testString)) //false
