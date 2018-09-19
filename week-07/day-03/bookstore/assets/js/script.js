window.onload = () => {

  const host = 'http://localhost:3000';
  const http = new XMLHttpRequest();
  const tablebody = document.querySelector('tbody');

  http.open('GET', `${host}/api/books/`, true);
  console.log(http);

  http.onload = () => {
    if (http.status === 200) {
      const source = JSON.parse(http.response);
      console.log(source);
      source.forEach(book => {
        let newTabRow = document.createElement('tr');
        tablebody.appendChild(newTabRow);
        let newTitle = document.createElement('td');
        newTabRow.appendChild(newTitle);
        newTitle.innerText = book.book_name;
        let newAuthor = document.createElement('td');
        newTabRow.appendChild(newAuthor);
        newAuthor.innerText = book.aut_name;
        let newPub = document.createElement('td');
        newTabRow.appendChild(newPub);
        newPub.innerText = book.pub_name;
        let newCat = document.createElement('td');
        newTabRow.appendChild(newCat);
        newCat.innerText = book.cate_descrip;
        let newPrice = document.createElement('td');
        newTabRow.appendChild(newPrice);
        newPrice.innerText = book.book_price;



      });



    }
  }


  http.send()

}