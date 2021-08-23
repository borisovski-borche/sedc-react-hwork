import { useForm } from "react-hook-form";
import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import validator from "validator";

import BooksContext from "../../context/BoooksContext/books.context";

import classes from "./LoginForm.module.css";

const LoginForm = props => {
  const bookContext = useContext(BooksContext);

  let history = useHistory();
  const [isFormValid, setIsFormValid] = useState(true);

  const { register, handleSubmit, setFocus, reset } = useForm();

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  const submitUserData = userData => {
    const { email, password } = userData;
    console.log(email, password);
    const isUserValid = bookContext.loginUser(email, password);

    if (isUserValid) {
      history.replace("/");
      setIsFormValid(true);
      return;
    }
    reset();
    setIsFormValid(false);
  };

  return (
    <form
      className={classes.form}
      onSubmit={handleSubmit(submitUserData, error => {
        console.log(error);
        setIsFormValid(false);
      })}
    >
      <div className="bg-light p-3">
        <h2 className="text-center">Login</h2>
        <div className="form-group my-3">
          <label>Email</label>
          <input
            {...register("email", {
              required: true,
              validate: validator.isEmail,
            })}
            type="email"
            className="form-control"
          />
        </div>
        <div className="form-group my-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            {...register("password", { required: true, minLength: 6 })}
          />
        </div>
        <div className="d-flex justify-content-center m-2">
          <button className="btn btn-success" type="submit">
            Sign In
          </button>
        </div>
        {!isFormValid && (
          <p className="fs-4 text-danger text-center">Invalid Credentials</p>
        )}
      </div>
    </form>
  );
};

export default LoginForm;
