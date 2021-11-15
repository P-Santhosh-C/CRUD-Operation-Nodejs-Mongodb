// Use Mongoose to establish connection with MongoDB and implement the following CRUD operations.
// i) List out all the books.
// ii) Add a new book.
// iii) Update a book price.
// iv) Delete a book.
// v) Get the details of a book by book ID.

"use strict";

var mongoose = require("mongoose"),
  Book = mongoose.model("Books");

exports.books = (req, res) => {
  Book.find({}, (err, book) => {
    if (err) res.send(err);
    res.json(book);
  });
};

exports.add = (req, res) => {
  var new_book = new Book(req.body);
  new_book.save((err, book) => {
    if (err) res.send(err);
    res.json(book);
  });
};

exports.getbook = (req, res) => {
  Book.findById(mongoose.Types.ObjectId(req.params["bookId"]), (err, book) => {
    if (err) res.send(err);
    res.json(book);
  });
};

exports.update = (req, res) => {
  var id = mongoose.Types.ObjectId(req.params["bookId"]);
  Book.findOneAndUpdate({ _id: id }, req.body, { new: true }, (err, book) => {
    if (err) res.send(err);
    res.json(book);
  });
};

exports.delete = (req, res) => {
  var id = mongoose.Types.ObjectId(req.params["bookId"]);
  Book.remove(
    {
      _id: id,
    },
    (err, book) => {
      if (err) res.send(err);
      res.json({ message: "Book deleted successfully" });
    }
  );
};
