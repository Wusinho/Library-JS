

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

class UI {
  constructor() {
      addBooktoList(book) {
        const list = document.getElementById("book-list");
        const row = document.createElement("tr");
        row.innerHTML = 
        `
          <td> ${book.title} </td>
          <td> ${book.author} </td>
          <td> ${book.pages} </td>
          <td> ${book.read} </td>
          <td><a href="" class="delete">X</a></td>
        `;
        list.appendChild(row);
      }
      deleteBook(target) {
          if (target.className === 'delete') {
              target.parentElement.removeChild(target);
          }
      }
      clearFields() {
          document.getElementById('title').value = '';
          document.getElementById('author').value = '';
          document.getElementById('pages').value = '';
          document.getElementById('read').value = '';
      }
  }
}


