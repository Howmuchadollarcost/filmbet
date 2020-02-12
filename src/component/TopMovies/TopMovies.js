import React from "react";

import { MovieConsumer } from "../../MovieContext";
import CardsContainer from '../../container/CardsContainer';


function TopMovies(){
  const title = "Popular Movies"
  return(
    <MovieConsumer>
      {({movies}) => (
        <React.Fragment>
          <CardsContainer movies={movies} title={title} />
        </React.Fragment>
      )}
    </MovieConsumer>
  )
}

export default TopMovies;
