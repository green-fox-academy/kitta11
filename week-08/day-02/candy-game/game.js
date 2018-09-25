// Gather 10.000 candies!
// Clicking the ‘Create candies’ button gives you 1 candy.
// You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// 10 lollipops generate 1 candy per second.
// Use the 🍭 emoji to display the lollipops you have
// Display the candy producton rate in the Candies / Second row
// If you press the "make candy rain" button, the candy generation should speed up 10x

const createcandyBtn = document.querySelector('.create-candies');
let candyNum = document.querySelector('.candies');
let value = Number(candyNum.innerText);
const buyLollyBtn = document.querySelector('.buy-lollypops');
let oneLolly = '🍭'

let lollyNum = document.querySelector('.lollypops');
let actualLolly = lollyNum.innerText;


const addCandy = () => {
  if (value <= 10000) {
    value++;
    candyNum.innerText = value;

  } else {
    candyNum.innerText = `You reached the target of ${value} candy! `;
  }
}

const buyLolly = () => {
  actualLolly += oneLolly;
  lollyNum.innerText = actualLolly;
  value -= 100;
  candyNum.innerText = value;

}

createcandyBtn.addEventListener('click', addCandy)

buyLollyBtn.addEventListener('click', () => {
  if (value >= 100) {
    buyLolly();
  } else {
    alert('You need at least 100 candies to buy a lollypop');
  }
})



