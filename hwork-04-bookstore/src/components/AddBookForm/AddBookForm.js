import { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { useForm } from "react-hook-form";

import BooksContext from "../../context/BoooksContext/books.context";
import { Book } from "../../context/BoooksContext/book.model";
import classes from "./AddBookForm.module.css";

const AddBookForm = () => {
  let history = useHistory();
  const [isFormValid, setIsFormValid] = useState(true);

  const placeholderImgUrl =
    "https://leadershiftinsights.com/wp-content/uploads/2019/07/no-book-cover-available.jpg";

  const { register, handleSubmit, watch, setFocus } = useForm();

  useEffect(() => {
    setFocus("name");
  }, [setFocus]);

  const coverImgUrl = watch("coverImgUrl");
  const booksContext = useContext(BooksContext);

  if (!booksContext.loggedInUser || !booksContext.isAdminCheck()) {
    history.replace("/");
  }

  const createAndAddBook = data => {
    const book = new Book(
      uuid(),
      data.name,
      data.authorName,
      data.published,
      data.inStock,
      data.genre,
      data.coverImgUrl || placeholderImgUrl
    );

    booksContext.addBookToStore(book);
    history.replace("/");
  };

  return (
    <form
      className={classes.form}
      onSubmit={handleSubmit(createAndAddBook, error => setIsFormValid(false))}
    >
      <div className="bg-light p-3">
        <h2 className="text-center">Add Book</h2>
        <div className="form-group">
          <label>Book name:</label>
          <input
            {...register("name", { required: true })}
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label>Author:</label>
          <input
            className="form-control"
            type="text"
            {...register("authorName", { required: true })}
          />
        </div>
        <div className="row">
          <div className="form-group col-4">
            <label>Published in (year):</label>
            <input
              className="form-control"
              type="number"
              {...register("published", { required: true })}
            />
          </div>
          <div className="form-group col-8">
            <label>Genre:</label>
            <input
              className="form-control"
              type="text"
              {...register("genre", { required: true })}
            />
          </div>
          <div className="form-group">
            <label>Cover Image URL:</label>
            <input
              className="form-control"
              type="text"
              {...register("coverImgUrl")}
            />
          </div>
          <div className="row my-3 d-flex justify-content-center">
            <div className="d-flex justify-content-center">
              <img
                className="img-fluid"
                src={coverImgUrl || placeholderImgUrl}
                alt="Cover Preview"
              ></img>
            </div>
          </div>
          <div className="row d-flex align-items-end justify-content-center">
            <div className="form-group col-4">
              <label>Starting Stock:</label>
              <input
                className="form-control"
                type="number"
                {...register("inStock", { required: true })}
              />
            </div>
            <button className="btn btn-success col-4">ADD</button>
          </div>
          {!isFormValid && (
            <p className="fs-4 text-danger text-center">
              All fields except Image URL are Mandatory
            </p>
          )}
        </div>
      </div>
    </form>
  );
};

export default AddBookForm;
