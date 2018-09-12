// You can work in the html or in a separate js file. Like:
//     <script>
//       1. store the element that says 'The King' in the 'king' variable.
//       console.log it.
//       2. store 'The Businessman' and 'The Lamplighter'
//       in the 'businessLamp' variable.
//       console.log each of them.
//       3. store 'The King' and 'The Conceited Man'
//       in the 'conceitedKing' variable.
//       alert them one by one.
//       4. store 'The King', 'The Conceited Man' and 'The Lamplighter'
//       in the 'noBusiness' variable.
//       console.log each of them.
//     </script>
//     OR
//     <script src="queryselector-1.js"></script>

'use strict'

let king = document.getElementById('b325');
console.log(king);
let businessLamp = document.querySelectorAll('.asteroid.big')
console.log(businessLamp)
let conceitedKing = document.querySelectorAll('.container .asteroid');
// for (let i = 0; i < conceitedKing.length; i++) {
//   alert(`${conceitedKing[i]} you are alerted!`);
// }
console.log(conceitedKing);
let noBusiness = document.querySelectorAll('div');
console.log(noBusiness);

// let nobizPattern = /b\d{3}/
// let allAsteroid = document.querySelectorAll('.asteroid')
// console.log(allAsteroid)
// allAsteroid.forEach(elem => {
//   if (elem.indexOf(nobizPattern) > 0) {
//     console.log(elem);
//   }
// })

