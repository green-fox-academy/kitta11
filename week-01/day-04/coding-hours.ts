'use strict';
let dailyCodingHours: number = 6;
let numberOfWeeks: number = 17;
let SumHours: number = (numberOfWeeks * 5 * dailyCodingHours);
let compareToWork: number = Math.floor((SumHours / (52 * numberOfWeeks))* 100);
console.log(`Hours spent by coding in a semester: ${SumHours}
This is ${compareToWork}% of the average working hours during that period.`);

