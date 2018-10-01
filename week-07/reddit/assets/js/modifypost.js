'use strict';
window.onload = () => {
  const host = 'http://localhost:3000';
  const currentId = localStorage.getItem('currentId');
  const getPostContent = new XMLHttpRequest();
  const titleInput = document.querySelector('input[name="title"]');
  const urlInput = document.querySelector('input[name="url"]');
  const ownerInput = document.querySelector('input[name="owner_id"]');
  const form = document.querySelector('form');

  getPostContent.open('GET', `${host}/api/postcontent/${currentId}`, true);

  getPostContent.onload = () => {
    if (getPostContent.status === 200) {
      const source = JSON.parse(getPostContent.response);
      console.log(source);
      titleInput.value = source.title;
      urlInput.value = source.url;
      ownerInput.value = source.username;
    }
  }
  getPostContent.send()

  form.setAttribute('action', `http://localhost:3000/api/posts/${currentId}`)


}