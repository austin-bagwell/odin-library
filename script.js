const myLibrary = [];

const body = document.querySelector(".body");
const addBookBtn = document.querySelector(".add-book-btn");
const submitFormBtn = document.querySelector(".btn.submit-form");

body.addEventListener("click", toggleModal);
submitFormBtn.addEventListener("click", handleSubmit);

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  isRead() {
    this.read = !this.read;
  }
}

function getFormData(form) {
  // https://developer.mozilla.org/en-US/docs/Web/API/FormData/
}

function handleSubmit(e) {
  e.preventDefault();
  myLibrary.push("a book was added to the library");
  console.log(myLibrary);
}

function toggleModal(e) {
  const overlay = document.querySelector(".modal-overlay");
  const openModalBtn = document.querySelector(".add-book-btn");
  const modalElements = document.querySelectorAll(".modal");
  const toggleElements = [overlay, openModalBtn];
  const formSubmitBtn = document.querySelector(".btn.submit-form");

  if (toggleElements.includes(e.target)) {
    modalElements.forEach((el) => el.classList.toggle("hidden"));
  } else if (e.target === formSubmitBtn) {
    modalElements.forEach((el) => el.classList.toggle("hidden"));
  }
}
