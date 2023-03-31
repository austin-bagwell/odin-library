const myLibrary = [];

const body = document.querySelector(".body");
const addBookBtn = document.querySelector(".add-book-btn");

// addBookBtn.addEventListener("click", toggleModal);
body.addEventListener("click", toggleModal);

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  readBook() {
    this.read = !this.read;
  }
}
function addBookToLibrary(e) {
  e.preventDefault();
  openModal();
}

function toggleModal(e) {
  const modal = document.querySelector(".add-book-modal");
  const form = document.querySelector(".add-book-form");
  const overlay = document.querySelector(".modal-overlay");

  if (e.target.classList.contains("add-book-btn")) {
    modal.classList.toggle("hidden");
    form.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
  } else if (e.target.classList.contains("modal-overlay")) {
    modal.classList.toggle("hidden");
    form.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
  }
}
