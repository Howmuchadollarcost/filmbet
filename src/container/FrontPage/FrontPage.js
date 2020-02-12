import React from "react";

import Hero from "../../component/Hero/Hero";
import Form from "../../component/Form/Form";
import TopMovies from "../../component/TopMovies/TopMovies";

function FrontPage(props) {
  return (
    <React.Fragment>
      <Hero />
      <Form />
      <TopMovies />
    </React.Fragment>
  );
}

export default FrontPage;
