import "./App.css";

import CountriesList from "./components/CountriesList";
import CountriesListClass from "./components/CountriesListClass";

function App() {
  return (
    <main className="container">
      <h1 className="text-center m-5 text-light">Countries List Homework</h1>
      <div className="row">
        <div className="col m-4 bg-light rounded">
          <h2 className="text-center m-3 fs-2">Hooks Version</h2>
          <CountriesList />
        </div>
        <div className="col m-4 bg-light rounded">
          <h2 className="text-center m-3 fs-2">Classes Version</h2>
          <CountriesListClass />
        </div>
      </div>
    </main>
  );
}

export default App;
