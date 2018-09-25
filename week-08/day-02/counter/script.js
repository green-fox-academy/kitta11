'use strict';

const liTag = document.querySelectorAll('li');
const btn = document.querySelector('button');
const result = document.querySelector('.result')
console.log(liTag);
console.log(btn);
console.log(result);

const countItem = () => {
  let sumofLi = liTag.length;
  console.log(sumofLi);
  result.innerHTML = `In the list ${sumofLi} items can be found`;
}

btn.addEventListener('click', countItem)

