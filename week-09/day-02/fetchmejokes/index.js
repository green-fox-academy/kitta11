window.onload = () => {
  const jokesDiv = document.querySelector('#jokes');
  const btn = document.querySelector('button');
  console.log(jokesDiv);
  console.log(btn);

  const URL = 'http://api.icndb.com/jokes/random';

  btn.addEventListener('click', (event) => {
    fetch(URL)
      .then(response => response.json())
      .then(myJson => {
        console.log(myJson.value)
        jokesDiv.innerHTML = `"${myJson.value.joke}"`
      });
  })
}