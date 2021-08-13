import { useState, useEffect } from "react";

import MovieItem from "./movie-item/MovieItem";

const PeopleItem = props => {
  const { person } = props;

  const style = {
    listStyle: "none",
    fontSize: "1.2rem",
    margin: "10px",
  };

  const [detailsToggle, setDetailsToggle] = useState(false);

  const details = (
    <div className="row">
      <ul style={style}>
        <li>Height: {person.height}cm</li>
        <li>Mass: {person.mass}kg</li>
        <li>Gender: {person.gender}</li>
        <li>Eye Color: {person.eye_color}</li>
        <li>Hair Color: {person.hair_color}</li>
        <li>Skin Color: {person.skin_color}</li>
        <li className="ms-4 mt-2">
          <p className="fw-bold fs-4">Movies :</p>
          <ul className="list-group">
            {person.films.map(url => (
              <MovieItem movieUrl={url} key={url} />
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );

  useEffect(() => {}, []);

  useEffect(() => {}, []);

  return (
    <li className={`list-group-item ${detailsToggle ? "bg-light" : ""}`}>
      <div className="row">
        <h3 className="col-9">{person.name}</h3>
        <button
          className={`btn col-3 btn-${detailsToggle ? "danger" : "primary"}`}
          onClick={() => {
            setDetailsToggle(!detailsToggle);
          }}
        >
          {detailsToggle ? "Hide Details" : "Show Details"}
        </button>
      </div>
      {detailsToggle ? details : ""}
    </li>
  );
};

export default PeopleItem;
