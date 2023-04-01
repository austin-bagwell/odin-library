"use strict";

const body = document.querySelector(".body");
const form = document.querySelector(".add-book-form");

body.addEventListener("click", toggleModal);
form.addEventListener("submit", handleSubmit);

const myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read === "true";
  }
}

function handleSubmit(e) {
  e.preventDefault();
  const data = new FormData(form);
  const { title, author, pages, read } = Object.fromEntries(data);
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  console.log(book);
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
