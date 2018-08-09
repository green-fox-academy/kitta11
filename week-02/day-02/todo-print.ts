'use strict';
export { };

// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention
// Expected outpt:
// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let todoText: string = ' - Buy milk\n';
let lineBreak: string = '\n'
let indentUnit: string = ' ';
let myTodo: string = 'My todo:';
let downGame: string = '- Download games';
let diab: string = '- Diablo';

todoText = myTodo + lineBreak + todoText + indentUnit + downGame + lineBreak + indentUnit + indentUnit + indentUnit + diab;
console.log(todoText);