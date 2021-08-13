import React, { useState, useEffect } from "react";
import PlanetPagination from "./PlanetPagination";
import PlanetItem from "./PlanetItem";

import axios from "axios";

const PlanetList = () => {
  const [planets, setPlanets] = useState([]);
  const [prevUrl, setPrevUrl] = useState("");
  const [nextUrl, setNextUrl] = useState("");
  const [currentUrl, setCurrentUrl] = useState(
    "https://swapi.dev/api/planets/?page=1"
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchPlanets(currentUrl);
  }, [currentUrl]);

  const fetchPlanets = async url => {
    const response = await axios.get(url);
    setPlanets(response.data.results);
    setNextUrl(response.data.next);
    setPrevUrl(response.data.previous);
    setLoading(false);
  };

  return (
    <div className="col-6 p-3 d-flex flex-column">
      <h2 className="text-center m-3">Planets of Star Wars</h2>
      <PlanetPagination
        nextUrl={nextUrl}
        prevUrl={prevUrl}
        onChangeCurrentUrl={setCurrentUrl}
        pageNum={currentUrl[currentUrl.length - 1]}
      />
      {loading ? (
        <p className="fs-2 text-center">Loading...</p>
      ) : (
        <ul className="list-group">
          {planets.map(planet => {
            return <PlanetItem planet={planet} key={planet.name} />;
          })}
        </ul>
      )}
    </div>
  );
};

export default PlanetList;
