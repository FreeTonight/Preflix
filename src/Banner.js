import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";
import { Button } from "./Button";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  console.log(movie);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">{movie?.name}</h1>
        <div className="banner-buttons">
          <Button className="banner-button">
            Play
          </Button>
          <Button className="banner-button">My List</Button>
        </div>

        <h1 className="banner-description">{truncate(movie?.overview, 200)}</h1>
      </div>
      <div className="banner--fadeBottom" />

    </header>
  );
}

export default Banner;
