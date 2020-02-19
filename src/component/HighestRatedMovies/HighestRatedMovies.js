import React from "react";

import { MovieConsumer } from "../../MovieContext";
import CardsContainer from '../../container/CardsContainer';

function HighestRatedMovies(){
  const title = "Høyest rangerte filmer"
  return(
    <MovieConsumer>
      {({highestRatedMovies}) => (
        <React.Fragment>
          <CardsContainer movies={highestRatedMovies} title={title} />
        </React.Fragment>
      )}
    </MovieConsumer>
  )
}

export default HighestRatedMovies;
