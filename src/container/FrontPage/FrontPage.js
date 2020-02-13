import React from "react";

import Hero from "../../component/Hero/Hero";
import Form from "../../component/Form/Form";
import TopMovies from "../../component/TopMovies/TopMovies";
import UpcomingMovies from '../../component/UpcomingMovies/UpcomingMovies';
import HighestRatedMovies from '../../component/HighestRatedMovies/HighestRatedMovies';
import NowPlaying from '../../component/NowPlaying/NowPlaying';

function FrontPage(props) {
  return (
    <React.Fragment>
      <Hero />
      <Form />
      <TopMovies />
      <NowPlaying />
      <UpcomingMovies />
      <HighestRatedMovies />
    </React.Fragment>
  );
}

export default FrontPage;
