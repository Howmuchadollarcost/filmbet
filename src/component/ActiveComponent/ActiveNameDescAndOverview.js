import React from "react";
import styled from "styled-components";

const MovieTitle = styled.h2`
  font-size: 3rem;
  text-transform: uppercase;
  margin: 25px 15px;
`;

const MovieOverview = styled.div`
  margin: 20px 15px;
  width: 100%;
`;

function ActiveNameDescAndOverview({ movieDetail }) {
  return movieDetail ? (
    <>
      <MovieTitle>{movieDetail.title}</MovieTitle>
      <MovieOverview>{movieDetail.overview}</MovieOverview>
    </>
  ) : null;
}

export default ActiveNameDescAndOverview;
