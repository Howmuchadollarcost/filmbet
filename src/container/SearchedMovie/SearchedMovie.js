import React from "react";
import styled from "styled-components";

import { MovieConsumer } from "../../MovieContext";
import Loading from "../../component/Loading/Loading";
import Card from '../../component/Card/Card';

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0 0;
  overflow: hidden;
  width: 100%;
`;

const GridRow = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80%;
`;

const GridCol = styled.section`
  position: relative;
  max-width: 100%;
  flex-direction: column;
  margin: 0 auto;
`;

function SearchedMovie(props) {
  return (
    <MovieConsumer>
      {({ loading, data,active }) => (
        <React.Fragment>
          {loading ? (
            <Loading />
          ) : (
            <React.Fragment>
              <Grid>
                <GridRow>
                  {data.results.map((movie, i) => {
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
          )}
        </React.Fragment>
      )}
    </MovieConsumer>
  );
}

export default SearchedMovie;
