// Use Mongoose to establish connection with MongoDB and implement the following CRUD operations.
// i) List out all the books.
// ii) Add a new book.
// iii) Update a book price.
// iv) Delete a book.
// v) Get the details of a book by book ID.

'use strict';

module.exports = (app) => {
    var bookId = require('../controllers/bookController');
    app.route('/books')
        .get(bookId.books)
        .post(bookId.add);
    app.route('/books/:bookId')
        .get(bookId.getbook)
        .put(bookId.update)
        .delete(bookId.delete);
};