window.onload = () => {

  const host = 'http://localhost:3000';
  const http = new XMLHttpRequest();
  const containerDiv = document.querySelector('#container');

  http.open('GET', `${host}/api/news/`, true);
  console.log(http);

  http.onload = () => {
    if (http.status === 200) {
      const source = JSON.parse(http.response).response.docs;
      console.log(source);
      source.forEach(item => {
        let newTitle = document.createElement('h1');
        newTitle.innerText = item.headline.main;
        containerDiv.appendChild(newTitle);
        let newSnippet = document.createElement('p');
        newSnippet.classList.add('snippet');
        newSnippet.innerText = item.snippet;
        containerDiv.appendChild(newSnippet);
        let date = document.createElement('p');
        date.classList.add('date');
        date.innerText = item.pub_date;
        containerDiv.appendChild(date);
        let details = document.createElement('a');
        details.innerText = 'Read';
        details.setAttribute('href', item.web_url);
        details.setAttribute('target', '_blank');
        containerDiv.appendChild(details);


      });



    }
  }


  http.send()

}