window.onload = () => {
  const host = 'http://localhost:3000'
  const http = new XMLHttpRequest();
  const parentDiv = document.querySelector('#giphylist');
  const btnSelector = document.querySelectorAll('#selector button');
  console.log(btnSelector);
  let searchPhrase = 'sloth';

  //not working yet
  btnSelector.forEach(button => {
    button.addEventListener('click', (e) => {
      searchPhrase = button.innerText;
      http.open('GET', `${host}/api/giphy/${searchPhrase}`, true);
      console.log(http);
    })
  })


  http.open('GET', `${host}/api/giphy/${searchPhrase}`, true);
  console.log(http);

  http.onload = () => {

    if (http.status === 200) {
      const source = JSON.parse(http.response).data
      console.log(source);
      source.forEach((elem) => {
        let gifImgCont = document.createElement('div')
        parentDiv.appendChild(gifImgCont);
        gifImgCont.id = 'gifImgCont';

        let gifTitle = document.createElement('div')
        gifImgCont.appendChild(gifTitle);
        gifTitle.innerText = elem.title;
        gifTitle.id = 'gifTitle';

        let gifImg = document.createElement('img');
        gifImgCont.appendChild(gifImg);
        gifImg.classList.add('listview');
        gifImg.setAttribute('id', elem.id);
        gifImg.setAttribute('src', elem.images['480w_still'].url);
        gifImg.setAttribute('alt', 'Click to see the gif moving');

        gifImg.addEventListener('mouseover', () => {
          gifImg.title = 'Click to see the gif moving';
        })

        gifImg.addEventListener('click', () => {
          if (!gifImg.classList.contains('clicked')) {
            gifImg.setAttribute('src', elem.images.downsized_medium.url);
            gifImg.classList.add('clicked');
            console.log(gifImg);
          } else {
            gifImg.classList.remove('clicked');
            gifImg.setAttribute('src', elem.images['480w_still'].url);
            console.log(gifImg);
          }
        })

      })
    }
  }



  http.send();

}