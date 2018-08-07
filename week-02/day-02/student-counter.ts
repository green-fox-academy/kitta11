
'use strict';

const students: any[] = [
    { name: 'Theodor', age: 3, candies: 2 },
    { name: 'Paul', age: 9.5, candies: 2 },
    { name: 'Mark', age: 12, candies: 5 },
    { name: 'Peter', age: 7, candies: 3 },
    { name: 'Olaf', age: 12, candies: 7 },
    { name: 'George', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs: 
// - how many candies are owned by students

function howManyCandies(inputArray: object[]) {
    let numberOfCandies: number = 0;
    for (let counter = 0; counter < inputArray.length; counter++) {
        numberOfCandies += inputArray[counter]["candies"];
    }
    return console.log(`Number of candies: ${numberOfCandies}`);
}

howManyCandies(students);

// create a function that takes a list of students and logs:
// - Sum of the age of people who have less than 5 candies

function sumAgeOfCandieOwners (inputArray: object []) {
    let sumOfAge: number = 0;
    for (let counter = 0; counter < inputArray.length; counter++) {
        if (inputArray[counter]['candies'] < 5) {
            sumOfAge += inputArray[counter]["age"];
    } else {}
    return console.log(`Sum age of student who owns less then 5 candies: ${sumOfAge}`);
}
}

sumAgeOfCandieOwners(students);