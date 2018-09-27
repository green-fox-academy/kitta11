'use strict'
window.onload = () => {
  let submitBtn = document.querySelector("button[type=submit]");
  let favpetDiv = document.querySelector("#favpetdiv");

  favpetDiv.addEventListener('change', (e) => {
    submitBtn.disabled = false

  })



}