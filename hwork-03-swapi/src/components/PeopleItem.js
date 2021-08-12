import { useState } from "react";
import classes from "./PeopleItem.module.css";

const PeopleItem = props => {
  const { person } = props;

  const [detailsToggle, setDetailsToggle] = useState(false);

  const details = (
    <div className="row">
      <ul className={classes.detailsList}>
        <li>Height: {person.height}cm</li>
        <li>Mass: {person.mass}kg</li>
        <li>Gender: {person.gender}</li>
        <li>Eye Color: {person.eye_color}</li>
        <li>Hair Color: {person.hair_color}</li>
        <li>Skin Color: {person.skin_color}</li>
      </ul>
    </div>
  );

  return (
    <li className={`list-group-item ${detailsToggle ? "bg-light" : ""}`}>
      <div className="row">
        <h1 className="col-9">{person.name}</h1>
        <button
          className={`btn col-3 btn-${detailsToggle ? "danger" : "primary"}`}
          onClick={() => setDetailsToggle(!detailsToggle)}
        >
          {detailsToggle ? "Hide Details" : "Show Details"}
        </button>
      </div>
      {detailsToggle ? details : ""}
    </li>
  );
};

export default PeopleItem;
