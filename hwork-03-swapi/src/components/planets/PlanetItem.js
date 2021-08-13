import { useState } from "react";

const PlanetItem = props => {
  const { planet } = props;

  const style = {
    listStyle: "none",
    fontSize: "1.2rem",
    margin: "10px",
  };

  const [detailsToggle, setDetailsToggle] = useState(false);

  const details = (
    <div className="row">
      <ul style={style}>
        <li>Diameter: {planet.diameter}</li>
        <li>Climate: {planet.climate}</li>
        <li>Gender: {planet.gender}</li>
        <li>Gravity: {planet.gravity}</li>
        <li>Terrain: {planet.terrain}</li>
        <li>population: {planet.population}</li>
      </ul>
    </div>
  );

  return (
    <li className={`list-group-item ${detailsToggle ? "bg-light" : ""}`}>
      <div className="row">
        <h3 className="col-9">{planet.name}</h3>
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

export default PlanetItem;
