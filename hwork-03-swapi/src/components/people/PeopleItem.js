import { useState } from "react";

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
      </ul>
    </div>
  );

  return (
    <li className={`list-group-item ${detailsToggle ? "bg-light" : ""}`}>
      <div className="row">
        <h3 className="col-9">{person.name}</h3>
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
