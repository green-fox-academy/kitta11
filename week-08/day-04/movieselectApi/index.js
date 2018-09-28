'use strict';
window.onload = () => {

  const host = 'http://localhost:3000';
  const requestGenre = new XMLHttpRequest();
  const requestMovies = new XMLHttpRequest();
  const genreSelect = document.querySelector("datalist[id=genres]");
  const movieSelect = document.querySelector("datalist[id=movies]")
  let genrelistDIV = document.querySelector('#genrelist');
  let movielistDIV = document.querySelector('#movielist');
  let selectedSpan = document.querySelector('#selected');
  let resetBtn = document.querySelector("button[type=reset]")

  let urlgenre = `https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=a174b33570b86d71044e1d8f89774a2b`;
  requestGenre.open('GET', `${urlgenre}`, true);
  console.log(requestGenre);

  requestGenre.onload = () => {
    if (requestGenre.status === 200) {
      const genres = JSON.parse(requestGenre.response).genres;
      console.log(genres);

      for (let i = 0; i < genres.length; i++) {
        let newOption = `<option value="${genres[i].name}" id="${genres[i].id}"></option>`
        genreSelect.innerHTML += newOption;
      }
      let selectedGenre = null;
      let selectedGenreID = null;

      genrelistDIV.addEventListener('change', (e) => {
        selectedGenre = e.target.value;
        console.log(selectedGenre);
        for (let i = 0; i < genres.length; i++) {
          if (genres[i].name === selectedGenre) {
            selectedGenreID = genres[i].id
          };
        }
        listmovies(selectedGenreID);

      })

    }
  }
  requestGenre.send()

  const listmovies = (genreID) => {
    let urlmovie = [
      `https://api.themoviedb.org/3/discover/movie?`,
      `api_key=a174b33570b86d71044e1d8f89774a2b&`,
      `language=en-US&include_adult=false&include_video=false&page=1`,
      `&with_genres=${genreID}`
    ].join('');
    console.log(urlmovie);
    requestMovies.open('GET', `${urlmovie}`, true);
    console.log(requestMovies);

    requestMovies.onload = () => {
      if (requestGenre.status === 200) {
        const movies = JSON.parse(requestMovies.response).results;
        console.log(movies);
        for (let i = 0; i < movies.length; i++) {
          let newOption = `<option value="${movies[i].title}" id="${movies[i].id}"></option>`
          movieSelect.innerHTML += newOption;
        }
        movielistDIV.addEventListener('change', (e) => {
          console.log(e.target.value)
          selectedSpan.innerText = e.target.value;
          resetBtn.disabled = false;
        })
      }
    }

    requestMovies.send();
  }
}