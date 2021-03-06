'use strict';
export { };

const students: any[] = [
    { name: 'Mark', age: 9.5, candies: 2 },
    { name: 'Paul', age: 12, candies: 5 },
    { name: 'Clark', age: 7, candies: 3 },
    { name: 'Pierce', age: 12, candies: 7 },
    { name: 'Sean', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies
function moreCandiesThanFour(inputArray: object[]) {
    let haveMoreCandies: string[] = [];
    for (let index = 0; index < inputArray.length; index++) {
        if (inputArray[index]["candies"] > 2) {
            haveMoreCandies.push((inputArray[index]["name"]));
        } else { }
    }
    console.log(`The following students have more than 3 candies: ${haveMoreCandies}`);
}
moreCandiesThanFour(students);


function candieFilter(inputArray: object[], candyNo: number) {
    let haveMoreCandies = inputArray.filter(function (element) {
     return element['candies'] > candyNo;
    })
    return haveMoreCandies;
}

console.log(candieFilter(students, 2));



// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function avgCandies(inputArray: object[]) {
    let totalCandies: number = 0;
    for (let index = 0; index < inputArray.length; index++) {
        totalCandies += inputArray[index]["candies"]
    }
    return console.log(`Students own ${totalCandies / inputArray.length} candies in average`);
}

avgCandies(students);