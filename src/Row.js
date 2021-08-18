import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import Modal from "./Modal";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow, id }) => {
  const [movies, setMovies] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    setShowModal(true);
    setMovieSelected(movie);
  };

  useEffect(() => {
    document.body.classList.toggle("modal-open", showModal);
  }, [showModal]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div class="slider">
        <div className="slider-arrow-left">
          <span
            className="arrow"
            onClick={() => {
              document.getElementById(id).scrollLeft -= (window.innerWidth - 250)
            }}
          >
            <ArrowBackIosIcon />
          </span>
        </div>

        <div id={id} className="row-posters">
          {movies.map((movie) => (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={`row-poster ${isLargeRow && "row-posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          ))}
        </div>
        <div className="slider-arrow-right">
          <span
            className="arrow"
            onClick={() => {
              document.getElementById(id).scrollLeft += (window.innerWidth - 250)
            }}
          >
            <ArrowForwardIosIcon />
          </span>
        </div> 
       </div>

      {showModal && 
        <Modal
          show={showModal}
          onClose={() => setShowModal(false)}
          {...movieSelected}
          // id={movie.id}
        />
      }
    </div>
  );
};

export default Row;
