import axios from "axios";

import firebase from "../firebase";

const url = "http://localhost:3001/api";

const createToken = async () => {
  const user = firebase.auth().currentUser;

  const token = user && (await user.getIdToken());

  const authHeader = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  return authHeader;
};

export const fetchBooks = async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const addBook = async bookData => {
  const header = await createToken();
  try {
    const response = await axios.post(url, bookData, header);
    return response;
  } catch (error) {
    return error;
  }
};

export const updateBooksStock = async books => {
  //logic for updating the sttocks of the books
};

export const editBook = async book => {
  //logic for editing a single book
};

export const removeBook = async bookId => {
  //logic for removing a single book
};
