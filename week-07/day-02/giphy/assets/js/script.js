window.onload = () => {
  const host = 'http://localhost:3000'
  const http = new XMLHttpRequest();
  const parentDiv = document.querySelector('#giphylist');

  http.open('GET', `https://api.giphy.com/v1/gifs/search?api_key=MLozqAHGCLAaqAVavXZWPdmpf1w0wbOO&q=sloth&limit=16&offset=0&rating=G&lang=en`, true);
  console.log(http);

  http.onload = () => {
    if (http.status === 200) {
      const source = JSON.parse(http.response).data
      console.log(source);
      source.forEach((elem) => {
        let gifImg = document.createElement('img');
        gifImg.classList.add('listview')
        gifImg.setAttribute('src', elem.embed_url)
        gifImg.setAttribute('alt', elem.id)
        parentDiv.appendChild(gifImg)

      })
    }
  };

  http.send();

}