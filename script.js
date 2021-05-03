/* eslint-disable max-classes-per-file */

// class Book {
//   constructor(title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
//   }
// }

function Book(title, author, pages, read) {
  return {
    title,
    author,
    pages,
    read,
  };
}

function change(e) {
  const elem = document.getElementById(e.target.id);
  if (elem.innerHTML === 'Read') elem.innerHTML = 'Unread';
  else elem.innerHTML = 'Read';
}
class UI {
  static addBooktoList(book) {
    const list = document.getElementById('book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.pages}</td>
          <td ><button class='btn btn-success' id=${book.id} >${book.read}</button></td>
          <td><a href='' class='delete'>X</a></td>
        `;
    list.appendChild(row);
    const td = document.getElementById(book.id);
    td.addEventListener('click', (e) => change(e));
  }

  static deleteBook(target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
  }
}

document.getElementById('book-form').addEventListener('submit', (e) => {
  const book = Object.create(Book);

  book.title = document.getElementById('title').value;
  book.author = document.getElementById('author').value;
  book.pages = document.getElementById('pages').value;
  book.read = document.getElementById('read').value;

  if (book.title && book.author && book.pages) {
    UI.addBooktoList(book);
    UI.clearFields();
  }

  e.preventDefault();
});

document.getElementById('book-list').addEventListener('click', (e) => {
  UI.deleteBook(e.target);
  e.preventDefault();
});
