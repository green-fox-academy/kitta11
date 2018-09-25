// Gather 10.000 candies!
// Clicking the ‘Create candies’ button gives you 1 candy.
// You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// 10 lollipops generate 1 candy per second.
// Use the 🍭 emoji to display the lollipops you have
// Display the candy producton rate in the Candies / Second row
// If you press the "make candy rain" button, the candy generation should speed up 10x

const createcandyBtn = document.querySelector('.create-candies');
const candyNum = document.querySelector('.candies');
let value = Number(candyNum.innerText);

const buyLollyBtn = document.querySelector('.buy-lollypops');
const oneLolly = '🍭'
const lollyNum = document.querySelector('.lollypops');
let actualLolly = lollyNum.innerText;

const candyRainBtn = document.querySelector('.candy-machine');


const speedrateTag = document.querySelector('.speed');



const addCandy = () => {
  if (value <= 10000) {
    value++;
    candyNum.innerText = value;

  } else {
    candyNum.innerText = `You reached the target of ${value} candy! `;
  }
}

const autoCandy = (speed) => {
  speedrateTag.innerText = 1 / speed;
  setInterval(() => {
    addCandy();
  }, (speed * 1000));
}

const buyLolly = () => {
  actualLolly += oneLolly;
  let actualLollyValue = actualLolly.length / 2;
  lollyNum.innerText = actualLolly;
  value -= 100;
  candyNum.innerText = value;
  if (actualLollyValue >= 10) {
    console.log('extra candy generation started')
    autoCandy(1);
  }
}

createcandyBtn.addEventListener('click', addCandy)

buyLollyBtn.addEventListener('click', () => {
  if (value >= 100) {
    buyLolly();
  } else {
    alert('You need at least 100 candies to buy a lollypop');
  }
})

const candyRain = () => {
  console.log(1 / (Number(speedrateTag.innerText)))
  autoCandy(1 / (Number(speedrateTag.innerText)) / 10)

}

candyRainBtn.addEventListener('click', candyRain);


