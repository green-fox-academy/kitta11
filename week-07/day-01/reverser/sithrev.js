'use strict'

function sithVersion(inputString) {
  let whereisTheDot = [];
  let randomWords = ['Arrgh', 'Hastalavista', 'Hey girl', 'Domdom'];
  let dotlessArray = inputString.split(' ').map((elem, index) => {
    if (elem.indexOf('.') !== -1) {
      whereisTheDot.push(index);
      return elem.slice(0, elem.length - 1).toLowerCase()
    } else {
      return elem.toLowerCase()
    }
  })
  let sithVersion = []
  dotlessArray.forEach((elem, index) => {
    if (index % 2 === 0) {
      sithVersion[index + 1] = elem;
    } else {
      sithVersion[index - 1] = elem;
    }
  })

  whereisTheDot.forEach(elem => {
    sithVersion[0] = sithVersion[0].charAt(0).toUpperCase() + sithVersion[0].slice(1)
    if (elem < sithVersion.length - 1) {
      sithVersion[elem] += '.';
      sithVersion[elem + 1] = sithVersion[elem + 1].charAt(0).toUpperCase() + sithVersion[elem + 1].slice(1)
    }
  })

  for (let i = 0; i < 3; i++) {
    let randomNum = Math.floor(Math.random() * 4);
    sithVersion.push(randomWords[randomNum])
  }

  return sithVersion.join(' ');
}
module.exports = sithVersion;