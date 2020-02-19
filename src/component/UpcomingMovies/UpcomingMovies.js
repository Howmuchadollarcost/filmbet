import React from "react";

import { MovieConsumer } from "../../MovieContext";
import CardsContainer from '../../container/CardsContainer';

function UpcomingMovies(){
  const title = "Kommende Filmer"
  return(
    <MovieConsumer>
      {({upComingMovies}) => (
        <React.Fragment>
          <CardsContainer movies={upComingMovies} title={title} />
        </React.Fragment>
      )}
    </MovieConsumer>
  )
}

export default UpcomingMovies;
