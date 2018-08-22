'use strict'

let weekAbbrev: string [] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
let weekFull: string [] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export function randomDayGen(weekArray: string []): string {
  let week: string[] = weekArray;
  return week[Math.floor(Math.random() * 6)];
}
