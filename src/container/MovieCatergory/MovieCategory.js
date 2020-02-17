import React from "react";

import TopMovies from "../../component/TopMovies/TopMovies";
import UpcomingMovies from "../../component/UpcomingMovies/UpcomingMovies";
import HighestRatedMovies from "../../component/HighestRatedMovies/HighestRatedMovies";
import NowPlaying from "../../component/NowPlaying/NowPlaying";

function MovieCategory(props) {
  return (
    <React.Fragment>
      <TopMovies />
      <NowPlaying />
      <UpcomingMovies />
      <HighestRatedMovies />
    </React.Fragment>
  );
}

export default MovieCategory;
