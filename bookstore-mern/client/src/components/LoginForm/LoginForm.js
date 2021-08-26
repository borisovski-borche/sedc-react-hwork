import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../../firebase";

import classes from "./LoginForm.module.css";

const LoginForm = props => {
  let history = useHistory();
  const [isFormValid, setIsFormValid] = useState(true);

  const { register, handleSubmit, setFocus, reset } = useForm();

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  const submitUserData = async userData => {
    const { email, password } = userData;

    let isUserValid = true;
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        console.log(error);
        isUserValid = false;
        setIsFormValid(false);
        reset();
        return;
      });

    if (!isUserValid) {
      return;
    }

    history.replace("/");
    setIsFormValid(true);
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
