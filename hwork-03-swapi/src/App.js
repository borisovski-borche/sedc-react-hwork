import { Fragment } from "react";
import "./App.css";
import PeopleList from "./components/PeopleList";

function App() {
  return (
    <Fragment>
      <h1 className="text-center m-3">Homework 03 - Swapi + LS Methods</h1>
      <main className="container">
        <PeopleList />
      </main>
    </Fragment>
  );
}

export default App;
