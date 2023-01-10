import Book from "../models/book.js";

export default {
  // this can be called anything but for the return value, use 'findAll' to select all books
  allBooks() {
    return Book.findAll();
  },
};
