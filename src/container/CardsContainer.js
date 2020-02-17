import React from "react";
import styled from 'styled-components';
import Card from "../component/Card/Card";


const Grid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0 0;
  overflow:hidden;
  width: 100%;

  h1{
    color: #fff;
    text-transform: uppercase;
    font-weight: 300;
  }
`

const GridRow = styled.section`
  display: flex;
  flex-direction: row;
  width: 80%;
  overflow: auto;
  overflow-y: hidden;

  ::-webkit-scrollbar{
    background: none;
    height: 5px;
  }


  ::-webkit-scrollbar-thumb {
    background: #292929; 
    border-radius: 5px;
    width: 100px;
  }
`

const GridCol = styled.section`
  position: relative;
  max-width:100%;
  flex-direction: column;
  margin: 0 auto;
`

function CardsContainer(props) {
    return (
      <React.Fragment>
      <Grid>
        <h1> {props.title} </h1>
        <GridRow>
          {props.movies.map((movie,i) => {
            return (
              <GridCol key={i}>
                <Card
                  title={movie.title}
                  image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  rating={movie.vote_average}
                  id={movie.id}
                />
              </GridCol>
            );
          })}
        </GridRow>
      </Grid>
    </React.Fragment>
    );
}

export default CardsContainer;