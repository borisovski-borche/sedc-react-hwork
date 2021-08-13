import { useState, useEffect } from "react";

import axios from "axios";

const MovieItem = props => {
  const { movieUrl } = props;

  const style = {
    listStyle: "none",
    fontSize: "1.2rem",
    margin: "10px",
  };

  const [detailsToggle, setDetailsToggle] = useState(false);
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    fetchMovie(movieUrl);
  }, [movieUrl]);

  const fetchMovie = async movieUrl => {
    const response = await axios.get(movieUrl);

    setMovieData(response.data);
  };

  const details = (
    <div className="row">
      <ul style={style}>
        <li>Episode Number: {movieData.episode_id}</li>
        <li>Director: {movieData.director}</li>
        <li>Producer: {movieData.producer}</li>
        <li>Release date: {movieData.release_date}</li>
      </ul>
    </div>
  );

  const jsx = movieData.title ? (
    <li className={`list-group-item`}>
      <div className="row">
        <h3 className="col-9">{movieData.title}</h3>
        <button
          className={`btn col-3 btn-outline-${
            detailsToggle ? "danger" : "primary"
          }`}
          onClick={() => setDetailsToggle(!detailsToggle)}
        >
          {detailsToggle ? "Hide Details" : "Show Details"}
        </button>
      </div>
      {detailsToggle ? details : ""}
    </li>
  ) : (
    <p>Loading...</p>
  );

  return jsx;
};

export default MovieItem;
