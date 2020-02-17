import React from "react";

import MovieCategory from "../MovieCatergory/MovieCategory";
import SearchedMovie from "../SearchedMovie/SearchedMovie";
import Loading from "../../component/Loading/Loading";

import { MovieConsumer } from "../../MovieContext";

function FrontPage(props) {
  return (
    <MovieConsumer>
      {({ loading, data, active }) => {
        if (loading) {
          return <Loading />;
        } else if (data.length !== 0 && active) {
          return <SearchedMovie />;
        } else {
           return <MovieCategory />;
        }
      }}
    </MovieConsumer>
  );
}

export default FrontPage;
