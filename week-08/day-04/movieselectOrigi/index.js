'use strict';
window.onload = () => {

  let genrelistDIV = document.querySelector('#genrelist');
  let movielistDIV = document.querySelector('#movielist');
  let movielist = document.querySelector('#movies').querySelectorAll('option');
  let selectedSpan = document.querySelector('#selected');
  let resetBtn = document.querySelector("button[type=reset]")


  genrelistDIV.addEventListener('change', (e) => {
    if (e.target.value === "Sci-fi") {
      movielist.forEach(movie => {
        if (movie.classList.contains("scifi")) {
          movie.disabled = false
        }
      })
    } else if (e.target.value === "Drama") {
      movielist.forEach(movie => {
        if (movie.classList.contains("drama")) {
          movie.disabled = false
        };
      })
    } else if (e.target.value === "Comedy") {
      movielist.forEach(movie => {
        if (movie.classList.contains("comedy")) {
          movie.disabled = false
        };
      })
    }
  })
  movielistDIV.addEventListener('change', (e) => {
    console.log(e.target.value)
    selectedSpan.innerText = e.target.value;
    resetBtn.disabled = false;
  })

}