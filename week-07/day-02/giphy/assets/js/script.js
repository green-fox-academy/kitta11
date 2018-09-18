window.onload = () => {
  const host = 'http://localhost:3000'
  const http = new XMLHttpRequest();
  const parentDiv = document.querySelector('#giphylist');

  http.open('GET', `${host}/api/giphy/kitten`, true);
  console.log(http);

  http.onload = () => {
    if (http.status === 200) {
      const source = JSON.parse(http.response).data
      console.log(source);
      source.forEach((elem) => {
        let gifImg = document.createElement('img');
        gifImg.classList.add('listview')
        gifImg.setAttribute('src', elem.images.downsized_medium.url)
        gifImg.setAttribute('alt', elem.id)
        parentDiv.appendChild(gifImg)
      })
    }
  };

  http.send();

}