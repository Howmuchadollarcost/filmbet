import React from 'react';
import styled from 'styled-components'

const MovieImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 25px;
  box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.2);
  margin: 20px 15px;
`;

function ActivePoster({movieDetail}) {
    return (movieDetail.poster_path) ? <MovieImage src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}` || {}} alt={movieDetail.title} /> : <h1>Loading...</h1>;
}

export default ActivePoster;