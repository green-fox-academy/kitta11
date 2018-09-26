const getRandom = () => {
  return Math.floor(Math.random() * 255);
};

const getRandomColor = () => {
  return `rgb(${getRandom()},${getRandom()},${getRandom()})`;
};

const container = document.querySelector('#container');
const scrollThreshold = 300;

const createXDiv = (num) => {
  for (let i = 0; i < num; i++) {
    let newDiv = document.createElement('div');
    container.appendChild(newDiv);
    newDiv.style.background = getRandomColor();
  }
  let endDiv = document.createElement('div');
  container.appendChild(endDiv);
  endDiv.style.background = 'white';
  endDiv.innerText = 'this is the end of the div generation'
}

createXDiv(3);

//window.addEventListener('scroll', createTenDiv)
window.addEventListener('scroll', (e) => {
  let top = e.srcElement.scrollingElement.scrollTop
  console.log(top)
  if (top < scrollThreshold) {
    createXDiv(4);
  }
})
