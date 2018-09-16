'use strict';

const imagelib = [
  { imgID: 11, imgtitle: 'Impossible to describe', imgdesc: 'One of the best and most beautiful morning in my life', src: './assets/imgs/IMG_1839.jpg' },
  { imgID: 12, imgtitle: 'Best friend of climbers', imgdesc: 'Without them it is impossible to deliver everything', src: './assets/imgs/IMG_2062.jpg' },
  { imgID: 13, imgtitle: 'Mount Everest Base Camp', imgdesc: 'Being there so closed to the Khumbu Icefall', src: './assets/imgs/IMG_2124.jpg' },
  { imgID: 14, imgtitle: 'My highest peak in my life 5500m', imgdesc: 'After hiking up for 2 hours when breathing was the challenge this is a good photo on the top of Khaale Pathar ', src: './assets/imgs/IMG_2366.jpg' },
  { imgID: 15, imgtitle: 'Not crowded', imgdesc: 'Lazy sunny day in the middle of nowhere', src: './assets/imgs/IMG_1958.jpg' },
  { imgID: 16, imgtitle: 'Taking a shot at the paparazzi', imgdesc: 'random winter after the Chola pass', src: './assets/imgs/IMG_1912.jpg' },
  { imgID: 17, imgtitle: 'Can somebody bring a coffee', imgdesc: 'Nature is amazing and huge, and we are so fucking small', src: './assets/imgs/IMG_1823.jpg' },
  { imgID: 18, imgtitle: 'Praying stones', imgdesc: 'Think about something, touch it and go left', src: './assets/imgs/IMG_1762.jpg' },

];

let navParent = document.querySelector('.nav');

imagelib.forEach(element => {
  let newThumbnail = document.createElement('img');
  navParent.appendChild(newThumbnail);
  newThumbnail.classList.add('thumbnail');
  newThumbnail.setAttribute('src', element.src);
  newThumbnail.setAttribute('alt', element.imgtitle);
  newThumbnail.setAttribute('id', element.imgID);
})


function displaySelectedImg(imageID) {
  const currentImg = document.querySelector('#currentimg');
  let selectedimg = imagelib.filter(elem => {
    return (elem.imgID === imageID);
  })[0];
  currentImg.setAttribute('src', selectedimg.src);
  currentImg.setAttribute('alt', selectedimg.imgtitle);
  let currentimgTitle = document.querySelector('#currentimgTitle');
  currentimgTitle.innerText = selectedimg.imgtitle;
  let currentimgDesc = document.querySelector('#currentimgDesc');
  currentimgDesc.innerText = selectedimg.imgdesc;


}


// default value for currentimgID
let currentimgID = imagelib[0].imgID;
displaySelectedImg(currentimgID);



let counter = 0;

function rightClick() {
  if (counter < imagelib.length - 1) {
    counter++
    let currentimgID = imagelib[counter].imgID;
    let prevImgID = imagelib[counter - 1].imgID;
    displaySelectedImg(currentimgID);
    let selectedthumbnail = document.getElementById(currentimgID);
    selectedthumbnail.style.border = '2px solid tomato';
    let deselectedthumbnail = document.getElementById(prevImgID);
    deselectedthumbnail.style.border = '2px solid white';


  } else {
    alert('you have reached the end of the library')
  }
}

function leftClick() {
  if (counter > 0) {
    counter--
    let currentimgID = imagelib[counter].imgID;
    let prevImgID = imagelib[counter + 1].imgID;
    displaySelectedImg(currentimgID)
    let selectedthumbnail = document.getElementById(currentimgID);
    selectedthumbnail.style.border = '2px solid tomato';
    let deselectedthumbnail = document.getElementById(prevImgID);
    deselectedthumbnail.style.border = '2px solid white';
  } else {
    alert('You are on the first pic')
  }
}

