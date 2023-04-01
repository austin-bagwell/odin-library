"use strict";

const body = document.querySelector(".body");
const form = document.querySelector(".add-book-form");
const bookList = document.querySelector(".book-list");
// const bookCards = document.querySelectorAll(".book-card");

body.addEventListener("click", toggleModal);
form.addEventListener("submit", handleSubmit);
bookList.addEventListener("click", removeBook);
// bookCards.forEach((card) => card.addEventListener("click", removeBook));

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read === "true";
  }
  _id;
}

// const hobbit = new Book("The Hobbit", "J.R.R Tolkien", "350", "true");
const myLibrary = [];
// renderBooks(myLibrary);s

function removeBook(e) {
  if (e.target.classList.contains("remove-book")) {
    const id = Number(e.target.id);
    const book = myLibrary.findIndex((book) => book._id === id);
    myLibrary.splice(book, 1);
    renderBooks(myLibrary);
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
    <div class="book-card">
    <div class="flex-row flex-end">
      <span class="remove-book grow" id="${book._id}">X</span>
    </div>
    <p class="book-title">${book.title}</p>
    <p class="by-author">by</p>
    <p class="book-author">${book.author}</p>
    <p>page count: <span class="page-count">${book.pages}</span></p>
    <div class="read-status-wrapper">
      <input type="checkbox" name="read" value="false" ${
        book.read ? "checked" : ""
      } />
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
