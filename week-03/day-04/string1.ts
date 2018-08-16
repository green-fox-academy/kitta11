'use strict';
export { };
// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.

function xReplacey(inputString: string, letterX: string, letterY: string): string {
  if (inputString.indexOf(letterX)=== -1) {
    return inputString
   } else {
    inputString = inputString.replace(letterX, letterY)
    return xReplacey(inputString, letterX, letterY);
   }
 }

 console.log(xReplacey('oxremipxum', 'x', 'y'));
 console.log(xReplacey('oxrexipxumytrx iuxiuy', 'y', 'x'));


