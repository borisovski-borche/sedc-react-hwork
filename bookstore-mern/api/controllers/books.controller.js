const booksRouter = require("express").Router();

const Book = require("../models/book.model");

booksRouter.get("/", async (req, res) => {
  const books = await Book.find();
  if (!books) {
    res.status(404).json({ message: "No Books Found" });
  }
  res.send(books);
});

booksRouter.post("/", async (req, res) => {
  if (!req.current && !req.admin) {
    res.status(401).send();
  }

  const book = new Book(req.body);

  try {
    const mongoRes = await book.save();
    res.status(200).send(mongoRes);
  } catch (error) {
    res.status(400).send(error);
  }
});

//get books - fetch all books from the db and load in client init

//update book - if a purchase was made change the stock value

//delete book - remove book (only if the user is an admin)

module.exports = booksRouter;
