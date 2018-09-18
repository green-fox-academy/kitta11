window.onload = () => {
  const host = 'http://localhost:3000'
  const http = new XMLHttpRequest();
  const parentDiv = document.querySelector('#giphylist');

  http.open('GET', `${host}/api/giphy/sloth`, true);
  console.log(http);

  http.onload = () => {
    if (http.status === 200) {
      const source = JSON.parse(http.response).data
      console.log(source);
      source.forEach((elem) => {
        let giflink = document.createElement('a')
        parentDiv.appendChild(giflink)
        giflink.setAttribute('href', elem.bitly_url)
        giflink.setAttribute('target', 'blank')
        let gifImg = document.createElement('img');
        giflink.appendChild(gifImg)
        gifImg.classList.add('listview')
        gifImg.setAttribute('src', elem.images['480w_still'].url)

      })
    }
  };

  http.send();

}