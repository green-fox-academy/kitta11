
'use strict';

let str1: string = 'I am looking for something which is like kimono but I have no idea';
let str2: string = 'some';

let result: number = str1.indexOf(str2);

if (result > 0) {
    console.log(`"${str2}" can be found on the ${str1.indexOf(str2)}. position in "${str1}"`);
} else {
    console.log(`"${str2}" can not be found inside "${str1}"`);
}