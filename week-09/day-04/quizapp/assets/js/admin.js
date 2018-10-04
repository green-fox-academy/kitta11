window.onload = () => {
  const host = 'http://localhost:3000';

  //form prevent event
  const form = document.querySelector('#addnewitem');
  form.addEventListener('submit', (event) => {
    // console.log(event)
    event.preventDefault()
    const { question, answerone, radioone, answertwo, radiotwo, answerthree, radiothree, answerfour, radiofour
    } = event.target.elements;
    // console.log(event.target.elements)
    const body = {
      question: question.value,
      answerone: answerone.value,
      radioone: radioone.checked,
      answertwo: answertwo.value,
      radiotwo: radiotwo.checked,
      answerthree: answerthree.value,
      radiothree: radiothree.checked,
      answerfour: answerfour.value,
      radiofour: radiofour.checked
    }
    console.log(body)
    const postQUrl = `${host}/questions`

    fetch(postQUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      // redirect: "manual", // manual, *follow, error
      body: JSON.stringify(body),
    })
      // .then(response => response.json())
      .then(response => {
        // console.log(myJson)
        window.location.reload('/admin');
        window.scrollTo(0, 0);
        form.reset();
      })
  })

  // listing questions
  const questList = document.querySelector('#questionlist')
  console.log(questList)
  const questURL = `${host}/questions`;

  fetch(questURL)
    .then(res => res.json())
    .then(myJson => {
      const questionList = myJson;
      console.log(questionList)

      questionList.forEach(item => {
        let questDiv = document.createElement('div')
        questList.appendChild(questDiv)
        questDiv.id = item.id;
        questDiv.classList.add('questdiv')

        let separator = document.createElement('div')
        questList.appendChild(separator);
        separator.classList.add('separator')

        let questionText = document.createElement('div');
        questDiv.appendChild(questionText);
        questionText.classList.add('questtext')
        questionText.innerText = item.question;

        let deleteBtn = document.createElement('button');
        questDiv.appendChild(deleteBtn);
        deleteBtn.classList.add('deletebtn')
        deleteBtn.innerHTML = `<i class="fas fa-trash"></i>Delete`;

        deleteBtn.addEventListener('click', (event) => {
          console.log(event);
          console.log(item.id)
          const deleteURL = `${host}/questions/${item.id}`
          console.log(deleteURL)
          // const body = { questionID: `${item.id}` }
          // console.log(body);
          fetch(deleteURL, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json; charset=utf-8",
            },
          })
            // .then(res => res.json())
            .then(response => {
              window.location.reload('/admin');
              window.scrollTo(0, 0);
            })
        })


      })
    })
}