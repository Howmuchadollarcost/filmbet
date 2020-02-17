import React, { useState, createContext, useEffect } from "react";

const MovieContext = createContext();

const TMDB_KEY = "9b5af6d9f992e2550944919a011154b7";

const MovieProvider = props => {
  //Search query
  const [active, setActive] = useState(false);

  //Searched movies
  const[data, setData] = useState([]);

  //Movies from TMDB API
  const [topMovie, setTopMovie] = useState([]);
  const [highestRatedMovies, setHighestRatedMovies] = useState([]);
  const [upComingMovies, setUpComingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  //Loading
  const [loading, setLoading] = useState(false);



  const handleChange = (e) =>{
    if(e.target.value !== ''){
      fetchSearchedMovie(e.target.value);
      setActive(true);
    }else{
      setActive(false)
    }
  }
 
  const fetchSearchedMovie = async (movie) => {
    setLoading(true);
    try{
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_KEY}&language=en-US&query=${movie}`);
      const data = await response.json();
      setData(data);
      setLoading(false);
    }catch(error){
      console.log("Error", error);
      setLoading(false);
    }
  }

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
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_KEY}&language=en-US`
      );
      const data = await response.json();
      setHighestRatedMovies(data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error", error);
      setLoading(false);
    }
  };

  const fetchUpcomingMovies = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${TMDB_KEY}&language=en-US`
      );
      const data = await response.json();
      setUpComingMovies(data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error", error);
      setLoading(false);
    }
  };

  const fetchNowPlayingMovies = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_KEY}&language=en-US`
      );
      const data = await response.json();
      setNowPlayingMovies(data.results);
      setLoading(false)
    } catch (error) {
      console.error("Error", error);
      setLoading(false);
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
        loading: loading,
        handleChange: handleChange,
        data: data,
        active:active
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

const MovieConsumer = MovieContext.Consumer;

export { MovieProvider, MovieConsumer };
