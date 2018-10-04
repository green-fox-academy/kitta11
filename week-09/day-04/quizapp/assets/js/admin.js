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
    const postQUrl = `${host}/question`

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
  const questList = document.querySelector('#existing')
}