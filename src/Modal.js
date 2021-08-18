import React, { useState, useEffect } from "react";
import "./Modal.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
// import axios from "./axios";

const Modal = ({
  backdrop_path,
  title,
  overview,
  name,
  setShowModal,
  show,
  onClose,
  id,
}) => {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [trailerUrl, setTrailerUrl] = useState("");
  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(title || name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
    // eslint-disable-next-line
  }, []);
  // const API_KEY = "b7355700049c4f733cf46a520a031150";

  //   useEffect(() => {
  //     async function fetchData() {
  //       try {
  //         const result = await axios.get(`movie/${id}/videos?api_key=${API_KEY}`)
  //         console.log(result.data);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     }
  //     fetchData();
  //   }
  //   , )

  return (
    <div className={`modal ${show ? "show" : ""}`} onClick={() => onClose()}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="close" onClick={() => onClose()}>
          <i className="fas fa-times-circle" />
        </div>
        <h3 className="modal-title">{title ? title : name}</h3>
        <div className="modal-trailer">
          {trailerUrl ? (
            <Youtube videoId={trailerUrl} opts={opts} />
          ) : (
            <img
              className="modal__poster-img"
              src={`${base_url}${backdrop_path}`}
              alt={title}
            />
          )}
        </div>

        <div className="modal-body">{overview}</div>
      </div>
    </div>
  );
};

export default Modal;
