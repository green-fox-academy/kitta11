const getRandom = () => {
  return Math.floor(Math.random() * 255);
};

const getRandomColor = () => {
  return `rgb(${getRandom()},${getRandom()},${getRandom()})`;
};

const container = document.querySelector('#container');
const scrollThreshold = 300;

const createTenDiv = () => {
  for (let i = 0; i < 10; i++) {
    let newDiv = document.createElement('div');
    container.appendChild(newDiv);
    newDiv.style.background = getRandomColor();
  }
  let endDiv = document.createElement('div');
  container.appendChild(endDiv);
  endDiv.style.background = 'white';
  endDiv.innerText = 'this is the end of the div generation'
}

createTenDiv();

window.addEventListener('scroll', createTenDiv)
