import React from "react";

import { MovieConsumer } from "../../MovieContext";
import CardsContainer from '../../container/CardsContainer';

function NowPlaying(){
  const title = "Now Playing"
  return(
    <MovieConsumer>
      {({nowPlayingMovies}) => (
        <React.Fragment>
          <CardsContainer movies={nowPlayingMovies} title={title} />
        </React.Fragment>
      )}
    </MovieConsumer>
  )
}

export default NowPlaying;
