import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { addBook } from "../../services/books.service";

import { useDispatch, useSelector } from "react-redux";
import * as actionCreators from "../../state/actions";
import { bindActionCreators } from "redux";

import classes from "./AddBookForm.module.css";

const AddBookForm = () => {
  let history = useHistory();
  const [isFormValid, setIsFormValid] = useState(true);

  const dispatch = useDispatch();
  const AC = bindActionCreators(actionCreators, dispatch);

  const auth = useSelector(state => state.auth);

  if (!auth.admin) {
    history.replace("/");
  }

  const placeholderImgUrl =
    "https://leadershiftinsights.com/wp-content/uploads/2019/07/no-book-cover-available.jpg";

  const { register, handleSubmit, watch, setFocus, reset } = useForm();

  useEffect(() => {
    setFocus("title");
  }, [setFocus]);

  const coverImgUrl = watch("coverImgUrl");

  const createAndAddBook = bookData => {
    const parsedBookData = {
      ...bookData,
      inStock: +bookData.inStock,
      coverImgUrl: bookData.coverImgUrl || placeholderImgUrl,
    };

    addBook(parsedBookData)
      .then(res => {
        AC.fetchBooksFromDb();
        history.replace("/");
      })
      .catch(error => {
        console.log(error);
        reset();
        setIsFormValid(false);
      });
  };

  return (
    <form
      className={classes.form}
      onSubmit={handleSubmit(createAndAddBook, error => {
        reset();
        setIsFormValid(false);
      })}
    >
      <div className="bg-light p-3">
        <h2 className="text-center">Add Book</h2>
        <div className="form-group">
          <label>Book name:</label>
          <input
            {...register("title", { required: true })}
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
              Invalid Form Submission
            </p>
          )}
        </div>
      </div>
    </form>
  );
};

export default AddBookForm;
