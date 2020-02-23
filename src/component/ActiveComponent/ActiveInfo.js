import React from "react";
import styled from "styled-components";

import { DateFormatter } from "../../utils/DateFormatter";

const MovieInfo = styled.section`
  color: #fff;
  .Movie__info__title {
    color: #343434;
    margin: 0 15px;
  }
`;

function ActiveInfo({ movieDetail }) {
  return movieDetail ? (
    <MovieInfo>
      <p>
        <span className="Movie__info__title">Release date:</span>
        {DateFormatter(movieDetail.release_date)}
      </p>
      <p>
        <span className="Movie__info__title">Duration:</span>{" "}
        {movieDetail.runtime}
      </p>
      <p>
        <span className="Movie__info__title">Status:</span>
        {movieDetail.status}
      </p>
      <p>
        <span className="Movie__info__title">Originial Language:</span>
        {movieDetail.original_language}
      </p>
    </MovieInfo>
  ): <h1>Loading...</h1>;
}

export default ActiveInfo;
