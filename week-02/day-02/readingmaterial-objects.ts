'use strict';
export { };

let student = {
    name: 'Helena',
    class: 'Coffee',
    age: 30,
    pets: ['cat', 'dog', 'horse']
}

let classMates = {
    firstName: 'Robin',
    lastName: 'Wright',
    age: 33
}

function printAge(myObject: object) {
    console.log(myObject['age']);
    console.log(Object.keys(myObject));

}
printAge(student);
printAge(classMates);
console.log(student.age);

let isStudentHasPets: boolean = student.hasOwnProperty('pets');
console.log(isStudentHasPets);

console.log(student.pets.indexOf('horse'));

