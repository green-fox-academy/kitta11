'use strict'
window.onload = () => {
  let submitBtn = document.querySelector("button[type=submit]");
  let loveCatsBtn = document.querySelector("button[type=button]");
  let favpetDiv = document.querySelector("#favpetdiv");
  let catfactsub = document.querySelector("#catfactsub");


  favpetDiv.addEventListener('change', (e) => {
    if (e.target.value !== 'goldfish') {
      submitBtn.disabled = false;
    } else {
      submitBtn.disabled = true;
    }
  })

  catfactsub.addEventListener('change', (e) => {
    if (e.target.value === 'yes') {
      loveCatsBtn.disabled = false;
      alert(`Thank you, you've successfully signed up for cat facts`)
    } else {
      loveCatsBtn.disabled = true;
      alert(`Sigh, we still added you to the cat facts list`)
    }
  })
}