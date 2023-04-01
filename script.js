"use strict";
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read === "true";
  }
  toggleRead() {
    this.read = !this.read;
  }
}
const myLibrary = [];

const body = document.querySelector(".body");
const form = document.querySelector(".add-book-form");
const bookList = document.querySelector(".book-list");

body.addEventListener("click", toggleModal);
form.addEventListener("submit", handleSubmit);
bookList.addEventListener("click", removeBook);
bookList.addEventListener("click", toggleRead);

function toggleRead(e) {
  if (e.target.classList.contains("select-read")) {
    const id = myLibrary.findIndex((book) => (book._id = e.target.id));
    const book = myLibrary[id];
    book.toggleRead();
    renderBooks(myLibrary);
  }
}

function removeBook(e) {
  if (e.target.classList.contains("remove-book")) {
    const id = Number(e.target.id);
    const book = myLibrary.findIndex((book) => book._id === id);
    myLibrary.splice(book, 1);
    const noBookMsg = "<h3>you ain't got no books yet...</h3>";

    myLibrary.length > 0
      ? renderBooks(myLibrary)
      : (bookList.innerHTML = noBookMsg);
  }
}

function handleSubmit(e) {
  e.preventDefault();
  const data = new FormData(form);
  const { title, author, pages, read } = Object.fromEntries(data);
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  renderBooks(myLibrary);
}

function renderBooks(library) {
  const bookList = document.querySelector(".book-list");
  bookList.innerHTML = "";
  library.map((book, i) => {
    book._id = i;
    const html = makeCard(book);
    bookList.insertAdjacentHTML("beforeend", html);
  });
}

function makeCard(book) {
  const template = `
    <div class="book-card book-id-${book._id}">
    <div class="flex-row flex-end">
      <span class="remove-book grow" id="${book._id}">X</span>
    </div>
    <p class="book-title">${book.title}</p>
    <p class="by-author">by</p>
    <p class="book-author">${book.author}</p>
    <p>page count: <span class="page-count">${book.pages}</span></p>
    <div class="read-status-wrapper">
      <input type="checkbox" name="read" value="false" class="select-read" id="${
        book._id
      }" ${book.read ? "checked" : ""} />
      <label for="read">${
        book.read ? "I've read this book" : "Have not read it yet"
      }</label>
    </div>
  </div>`;

  return template;
}

function toggleModal(e) {
  const overlay = document.querySelector(".modal-overlay");
  const addBookBtn = document.querySelector(".add-book-btn");
  const submitFormBtn = document.querySelector(".btn.submit-form");
  const modalElements = document.querySelectorAll(".modal");
  const toggleElements = [overlay, addBookBtn];

  if (toggleElements.includes(e.target)) {
    modalElements.forEach((el) => el.classList.toggle("hidden"));
  } else if (e.target === submitFormBtn) {
    modalElements.forEach((el) => el.classList.toggle("hidden"));
  }
}
