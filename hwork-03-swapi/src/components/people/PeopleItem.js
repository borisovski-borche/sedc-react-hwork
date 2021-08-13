import { useState, useEffect } from "react";

import MovieItem from "./movie-item/MovieItem";

const PeopleItem = props => {
  const { person, personId, onDetailsChanged, selectedId } = props;

  const style = {
    listStyle: "none",
    fontSize: "1.2rem",
    margin: "10px",
  };

  const [detailsToggle, setDetailsToggle] = useState(false);

  useEffect(() => {
    if (personId === selectedId) {
      setDetailsToggle(true);
      return;
    }
    setDetailsToggle(false);
  }, [personId, selectedId]);

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
          <p className=" fs-4">Movies :</p>
          <ul className="list-group">
            {person.films.map(url => (
              <MovieItem movieUrl={url} key={url} />
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );

  return (
    <li className={`list-group-item ${detailsToggle ? "bg-light" : ""}`}>
      <div className="row">
        <h3 className="col-9 ">{person.name}</h3>
        <button
          className={`btn col-3 btn-${detailsToggle ? "danger" : "primary"}`}
          onClick={() => {
            setDetailsToggle(!detailsToggle);
            onDetailsChanged(personId);
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
