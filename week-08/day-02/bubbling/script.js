
'use strict';

let navTag = document.querySelector('nav');
let image = document.querySelector('.img-inspector');
//Q: how can I get the value of an attribure from the css?
let origiSize = 200;
let origiX = 0;
let origiY = 0;

navTag.addEventListener('click', function (event) {
  if (event.target.getAttribute('data-action') == 'move') {
    switch (event.target.getAttribute('data-direction')) {
      case 'up':
        image.style.backgroundPositionY = `${origiY - 20}px`;
        origiY -= 20;
        break;
      case 'down':
        image.style.backgroundPositionY = `${origiY + 20}px`;
        origiY += 20;
        break;
      case 'left':
        image.style.backgroundPositionX = `${origiX - 20}px`;
        origiX -= 20;
        break;
      case 'right':
        image.style.backgroundPositionX = `${origiX + 20}px`;
        origiX += 20;
        break;
    }
  } else if (event.target.getAttribute('data-action') == 'zoom') {
    switch (event.target.getAttribute('data-direction')) {
      case 'out':
        image.style.backgroundSize = `${origiSize + 20}%`;
        origiSize += 20;
        break;
      case 'in':
        image.style.backgroundSize = `${origiSize - 20}%`;
        origiSize -= 20;
        break;
    }
  }
})