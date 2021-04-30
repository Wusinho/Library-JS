/* eslint-disable max-classes-per-file */

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

class UI {
  static addBooktoList(book) {
    const list = document.getElementById("book-list");
    const row = document.createElement("tr");
    row.innerHTML = `
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.pages}</td>
          <td>${book.read}</td>
          <td><a href="" class="delete">X</a></td>
        `;
    list.appendChild(row);
  }

  static deleteBook(target) {
    if (target.className === "delete") {
      target.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
  }
}

document.getElementById("book-form").addEventListener("submit", (e) => {
  const book = Object.create(Book);

  book.title = document.getElementById("title").value;
  book.author = document.getElementById("author").value;
  book.pages = document.getElementById("pages").value;
  book.read = document.getElementById("read").value;

  for (const [key, value] of Object.entries(book)) {
    console.log(`${key}: ${value}`);
  }
  //book(title, author, pages, read);

  if (book.title && book.author && book.pages) {
    UI.addBooktoList(book);
    UI.clearFields();
  }

  e.preventDefault();
});

document.getElementById("book-list").addEventListener("click", (e) => {
  UI.deleteBook(e.target);
  e.preventDefault();
});
