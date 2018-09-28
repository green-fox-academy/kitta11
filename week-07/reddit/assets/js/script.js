window.onload = () => {

  const host = 'http://localhost:3000';
  const requestPost = new XMLHttpRequest();
  const downvoteRequest = new XMLHttpRequest();
  const upvoteRequest = new XMLHttpRequest();
  const postblock = document.querySelector('#postcontainer');

  // downvote function with calling put request
  const downvote = (postid) => {
    downvoteRequest.open('PUT', `${host}/api/posts/${postid}/downvote`, true);
    console.log(downvoteRequest);

    downvoteRequest.onload = () => {
      if (downvoteRequest.status === 200) {
        const source = JSON.parse(downvoteRequest.response);
        console.log(source.score);
      }
    }
    downvoteRequest.send()
  }
  // upvote function with calling put request
  const upvote = (postid) => {
    upvoteRequest.open('PUT', `${host}/api/posts/${postid}/upvote`, true);
    console.log(upvoteRequest);

    upvoteRequest.onload = () => {
      if (upvoteRequest.status === 200) {
        const source = JSON.parse(upvoteRequest.response);
        console.log(source.score);
      }
    }
    upvoteRequest.send()
  }

  // core post listing
  requestPost.open('GET', `${host}/api/posts`, true);
  console.log(requestPost);

  requestPost.onload = () => {
    if (requestPost.status === 200) {
      const source = JSON.parse(requestPost.response).posts;
      console.log(source);

      source.forEach(post => {
        let newPostline = document.createElement('div');
        newPostline.classList.add('newpostline')
        newPostline.id = post.id;
        postblock.appendChild(newPostline);

        let newScoreDiv = document.createElement('div');
        newScoreDiv.classList.add('score');
        newPostline.appendChild(newScoreDiv);

        let upvoteBtn = document.createElement('button');
        upvoteBtn.classList.add('upvote');
        newScoreDiv.appendChild(upvoteBtn);

        let upvoteImg = document.createElement('img');
        upvoteImg.classList.add('votebutton');
        upvoteBtn.appendChild(upvoteImg);
        upvoteImg.setAttribute("src", "./assets/imgs/upvote.png");

        //without limiting voting per user
        upvoteBtn.addEventListener('click', () => {
          upvoteImg.setAttribute("src", "./assets/imgs/upvoted.png");
          upvote(upvoteBtn.parentElement.parentElement.id);
          voteCounter.innerText = (Number(voteCounter.innerText) + 1);
        })

        let voteCounter = document.createElement('div');
        voteCounter.classList.add('scorenum');
        newScoreDiv.appendChild(voteCounter);
        voteCounter.innerText = post.score;

        let downvoteBtn = document.createElement('button');
        downvoteBtn.classList.add('downvote');
        newScoreDiv.appendChild(downvoteBtn)

        let downvoteImg = document.createElement('img');
        downvoteBtn.appendChild(downvoteImg);
        downvoteImg.classList.add('votebutton');
        downvoteImg.setAttribute("src", "./assets/imgs/downvote.png");

        //without limiting voting per user
        downvoteBtn.addEventListener('click', () => {
          downvoteImg.setAttribute("src", "./assets/imgs/downvoted.png")
          downvote(downvoteBtn.parentElement.parentElement.id);
          voteCounter.innerText = (Number(voteCounter.innerText) - 1);
        })

        let newPostTextDiv = document.createElement('div');
        newPostTextDiv.classList.add('posttext');
        newPostline.appendChild(newPostTextDiv);

        let titleH2 = document.createElement('h2');
        newPostTextDiv.appendChild(titleH2);
        titleH2.innerText = post.title;

        let engageDiv = document.createElement('div');
        newPostTextDiv.appendChild(engageDiv);
        engageDiv.id = "engagement";

        let dateP = document.createElement('p');
        engageDiv.appendChild(dateP);
        dateP.id = "dateP";
        dateP.classList.add('engage');
        let date = new Date(post.timestamp).toDateString();
        dateP.innerText = `Submitted on ${date}`;

        let owner = document.createElement('p');
        engageDiv.appendChild(owner);
        owner.id = "owner";
        owner.classList.add('engage');
        owner.innerText = `Submitted by ${post.username}`;

        let modifyBtn = document.createElement('button');
        engageDiv.appendChild(modifyBtn);
        modifyBtn.id = "modify";
        modifyBtn.classList.add('engage');
        modifyBtn.innerText = `MODIFY`;

        let delBtn = document.createElement('button');
        engageDiv.appendChild(delBtn);
        delBtn.id = "delete";
        delBtn.classList.add('engage');
        delBtn.innerText = `DELETE`;


        upvoteBtn.addEventListener('click', () => {
          console.log(`I am clicked`)
        })
      });
    }
  }

  requestPost.send()


}