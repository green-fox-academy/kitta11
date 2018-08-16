'use strict';
export{};

// Given a string, compute recursively a new string where all the 'x' chars have been removed.

function xDelete (inputString: string, letterX: string): string {
  if (inputString.indexOf(letterX)=== -1) {
    return inputString
   } else {
    inputString = inputString.replace(letterX, '')
    return xDelete(inputString, letterX);
   }
 }

 console.log(xDelete('oxremipxum', 'x'));
 console.log(xDelete('oxrexipxumytrx iuxiuy', 'x'));
 let quoteOne: string = "We build our computer (systems) the way we build our cities: over time, without a plan, on top of ruins."

 console.log(xDelete(quoteOne, 'i'));
 
