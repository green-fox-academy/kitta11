'use strict';
const express = require('express');
const app = express();
const PORT = 3006;

const imagelib = [
  { imgID: 11, imgtitle: 'Impossible to describe', imgdesc: 'One of the best and most beautiful morning in my life', src: './../assets/imgs/IMG_1839.jpg' },
  { imgID: 12, imgtitle: 'Best friend of climbers', imgdesc: 'Without them it is impossible to deliver everything', src: './../assets/imgs/IMG_2062.jpg' },
  { imgID: 13, imgtitle: 'Mount Everest Base Camp', imgdesc: 'Being there so closed to the Khumbu Icefall', src: './../assets/imgs/IMG_2124.jpg' },
  { imgID: 14, imgtitle: 'My highest peak in my life 5500m', imgdesc: 'After hiking up for 2 hours when breathing was the challenge this is a good photo on the top of Khaale Pathar ', src: './../assets/imgs/IMG_2366.jpg' },
  { imgID: 15, imgtitle: 'Not crowded', imgdesc: 'Lazy sunny day in the middle of nowhere', src: './../assets/imgs/IMG_1958.jpg' },
  { imgID: 16, imgtitle: 'Taking a shot at the paparazzi', imgdesc: 'random winter after the Chola pass', src: './../assets/imgs/IMG_1912.jpg' },
  { imgID: 17, imgtitle: 'Can somebody bring a coffee', imgdesc: 'Nature is amazing and huge, and we are so fucking small', src: './../assets/imgs/IMG_1823.jpg' },
  { imgID: 18, imgtitle: 'Praying stones', imgdesc: 'Think about something, touch it and go left', src: './../assets/imgs/IMG_1762.jpg' },

];

const thumbnails = [];
imagelib.forEach(elem => {
  thumbnails.push(elem.src)
})

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

let counter = 0;

function rightClick(currentimgID) {
  if (counter === 0) {
    let currentimgID = imagelib[0].imgID;
  } else if (counter < imagelib.length + 1) {
    counter++
    let currentimgID = imagelib[counter].imgID;
  } else {
    alert('you have reached the end of the library')
  }
}

function leftClick() {
  if (counter === 0) {
    let currentimgID = imagelib[0].imgID;
  } else if (counter >= 0) {
    counter--
    let currentimgID = imagelib[counter].imgID;
  } else {
    alert('You are on the first pic')
  }
}

app.get('/', (req, res) => {
  let currentimgID = imagelib[0].imgID;
  let selectedimg = imagelib.filter(elem => {
    return (elem.imgID === currentimgID);
  })[0];
  res.render('home', {
    title: 'Gallery',
    imagelib,
    currentimgID,
    selectedimg,
    rightClick,
    leftClick,
  })
})

app.get('/:imgID', (req, res) => {
  let currentimgID = req.params.imgID;
  let selectedimg = imagelib.filter(elem => {
    return (elem.imgID == currentimgID);
  })[0];
  res.render('home', {
    title: 'Gallery',
    imagelib,
    currentimgID,
    selectedimg,
  });
})

app.listen(PORT, () => {
  console.log(`Este server fantastico is up and running on port: ${PORT}`)
})