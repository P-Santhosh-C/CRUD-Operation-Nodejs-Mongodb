// Use Mongoose to establish connection with MongoDB and implement the following CRUD operations.
// i) List out all the books.
// ii) Add a new book.
// iii) Update a book price.
// iv) Delete a book.
// v) Get the details of a book by book ID.

"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Schema = new Schema({
  book_name: { type: String, Required: "Book name cannot be left blank." },
  price: { type: Number, Required: "Book price cannot be left blank." },
  author: { type: String, Required: "Book author cannot be left blank" },
  edition: { type: String, Required: "edition must be filled" },
  status: { type: Boolean, Required: "Book status is required" },
  dop: { type: Date, Required: "Publishers date is required" },
});

module.exports = mongoose.model("Books", Schema);
