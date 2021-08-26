import { actionTypes as AT } from "./action-types";
import firebase from "../../firebase";

export const loginUser = userData => {
  return dispatch => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        user.getIdTokenResult()?.then(result => {
          dispatch({
            type: AT.LOGIN_USER,
            payload: {
              user: user.toJSON(),
              admin: result.claims.admin,
            },
          });
        });
      }
    });
  };
};

export const logOutUser = () => {
  return dispatch => {
    firebase.auth().signOut();
    dispatch({ type: AT.LOGOUT_USER });
  };
};
