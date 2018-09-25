// Create an event listener which logs the current timestamp to the console once the button is clicked.
// When the button is clicked for the second or any other times no event listener should be called.
// Try to solve this two different ways.
// hint: take a look at the button attributes https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button

'use strict';

const btnTag = document.querySelector('button');
console.log(btnTag);

const buttonClick = (event) => {
  let timeOfClick = event.timeStamp;
  console.log(timeOfClick);
  btnTag.disabled = true;
  setTimeout(function () {
    btnTag.disabled = false;
  }, 3000);

}


btnTag.addEventListener('click', buttonClick);