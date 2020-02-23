import React from "react";
import styled from "styled-components";

const MovieDesc = styled.div`
  display: inline-flex;
  align-items: center;
  width: 400px;
  justify-content: space-around;
  margin: 20px 10px;

  .genres {
    display: flex;
    flex-direction: column;
  }

  .genre {
    padding-bottom: 5px;
  }

  .rating {
    background: #323232;
    padding: 3px;
    border-radius: 4px;
    font-weight: 800;
  }

  .adult__rating{
    color: #fff;
  }
`;

function ActiveDescription({ movieDetail }) {
  return (movieDetail.genres) ? (
    <MovieDesc>
      <div className="rating">{movieDetail.vote_average}</div>
      <div className="genres">
      {
        movieDetail.genres.map((genre,i) =>{
          return <div key={i} className="genre"> {genre.name} </div>
        })
      }
      </div>
      <div className="adult__rating"> {(movieDetail.adult) ? <p>18+</p> : <p>13+</p>}</div>
    </MovieDesc>
  ) : null;
}

export default ActiveDescription;
