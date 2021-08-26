import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNAtuedMnCmAJsDH3hM8xELJ4Y0y4kSdk",
  authDomain: "bookstore-fstack.firebaseapp.com",
  projectId: "bookstore-fstack",
  storageBucket: "bookstore-fstack.appspot.com",
  messagingSenderId: "266153852735",
  appId: "1:266153852735:web:b7994bee851d012171dd8a",
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (error) {
  console.log("Something went wrong with firebase startup: " + error.message);
}

export default firebase;
