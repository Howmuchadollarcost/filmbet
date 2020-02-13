import React, { useState, createContext, useEffect } from "react";

const MovieContext = createContext();

const TMDB_KEY = "9b5af6d9f992e2550944919a011154b7";

const MovieProvider = props => {
  const [topMovie, setTopMovie] = useState([]);
  const [highestRatedMovies, setHighestRatedMovies] = useState([]);
  const [upComingMovies, setUpComingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  const [loading, setLoading] = useState(false);

  const fetchTopMovies = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_KEY}&language=en-US`
      );
      const data = await response.json();
      setTopMovie(data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error", error);
      setLoading(false);
    }
  };

  const fetchHighestRatedMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_KEY}&language=en-US`
      );
      const data = await response.json();
      setHighestRatedMovies(data.results);
    } catch (error) {
      console.error("Error", error);
    }
  };

  const fetchUpcomingMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${TMDB_KEY}&language=en-US`
      );
      const data = await response.json();
      setUpComingMovies(data.results);
    } catch (error) {
      console.error("Error", error);
    }
  };

  const fetchNowPlayingMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_KEY}&language=en-US`
      );
      const data = await response.json();
      setNowPlayingMovies(data.results);
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    fetchTopMovies();
    fetchHighestRatedMovies();
    fetchUpcomingMovies();
    fetchNowPlayingMovies();
  }, []);

  return (
    <MovieContext.Provider
      value={{
        movies: topMovie,
        highestRatedMovies: highestRatedMovies,
        upComingMovies: upComingMovies,
        nowPlayingMovies: nowPlayingMovies,
        loading: loading
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

const MovieConsumer = MovieContext.Consumer;

export { MovieProvider, MovieConsumer };
