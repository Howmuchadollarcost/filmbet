import React, { useState, createContext, useEffect } from "react";

const MovieContext = createContext();

const TMDB_KEY = "9b5af6d9f992e2550944919a011154b7";

const MovieProvider = props => {
  const [topMovie, setTopMovie] = useState([]);
  const [highestRatedMovies, setHighestRatedMovies] = useState([]);

  const fetchTopMovies = async () =>{
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_KEY}&language=en-US`);
        const data = await response.json();
        setTopMovie(data.results);
      } catch (error) {
          console.error("Error", error);
      }
  }


  const fetchHighestRatedMovies = async () =>{
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_KEY}&language=en-US`);
      const data = await response.json();
      setTopMovie(data.results);
    } catch (error) {
        console.error("Error", error);
    }
}

  useEffect(() => {
      fetchTopMovies();
      fetchHighestRatedMovies();
  }, []);

  return (
    <MovieContext.Provider value={{movies: topMovie, highestRatedMovies: highestRatedMovies}}>
      {props.children}
    </MovieContext.Provider>
  );
};

const MovieConsumer = MovieContext.Consumer;

export { MovieProvider, MovieConsumer };

 