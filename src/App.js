import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="Trending Now" id="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow/>
      <Row title="Top Rated" id="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Drama" id="Drama" fetchUrl={requests.fetchDrama} />
      <Row title="Horror Movies" id="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Animation" id="Animation" fetchUrl={requests.fetchAnimation} />
      <Row title="Action Movies" id="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="TV Show" id="TV Show" fetchUrl={requests.fetchTVShow} />
      <Row title="Comedy Movies" id="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romance Movies" id="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" id="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Science Fiction" id="Science Fiction" fetchUrl={requests.fetchScienceFiction} />
    </div>
  );
}

export default App;
