import React from "react";

import MovieCategory from "../MovieCatergory/MovieCategory";
import SearchedMovie from "../SearchedMovie/SearchedMovie";
import Loading from "../../component/Loading/Loading";

import Hero from "../../component/Hero/Hero"
import Form from "../../component/Form/Form";

import { MovieConsumer } from "../../MovieContext";
 

function FrontPage(props) {
  return (
    <MovieConsumer>
      {({ loading, data, active }) => (
        <React.Fragment>
          <Hero />
          <Form />
          {FrontpageGetter(loading, data, active)}
        </React.Fragment>
      )}
    </MovieConsumer>
  );
}

const FrontpageGetter = (loading, data, active) => {
  if (loading) {
    return <Loading />;
  } else if (data.length !== 0 && active) {
    return <SearchedMovie />;
  } else {
    return <MovieCategory />;
  }
};

export default FrontPage;
