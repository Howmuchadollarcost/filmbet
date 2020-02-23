import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Loading from "../Loading/Loading";
import { MovieConsumer } from "../../MovieContext";
import ActivePoster from "./ActivePoster";
import ActiveInfo from "./ActiveInfo";
import ActiveNameDescAndOverview from "./ActiveNameDescAndOverview";
import ActiveDescription from "./ActiveDescription";

const TMDB_KEY = "9b5af6d9f992e2550944919a011154b7";
const API = "https://api.themoviedb.org/3/movie/";

const Line = styled.hr`
  width: 80%;
  background: #fff;
`;

const Container = styled.main`
  position: relative;
  width: 400px;
  margin: 30px auto;

  @media (min-width: 768px) {
    width: 550px;
  }

  @media (min-width: 992px) {
    width: 700px;
  }

  @media (min-width: 1200px) {
    width: 1170px;
  }
`;

const MovieRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
`;

const MovieLeft = styled.div`
  flex: 1 1 500px;
  margin-right: 30px;
`;

const MovieRight = styled.div`
  flex: 1 1 50%;
  color: #fff;
`;

const ActiveComponent = () => {
  const [movieDetail, setMovieDetail] = useState({});
  const [activeLoading, setLoading] = useState(false);

  const fetchMovieDetail = async () => {
    const id = window.location.pathname.slice(1);
    setLoading(true);
    try {
      const response = await fetch(
        `${API}${id}?api_key=${TMDB_KEY}&language=en-US`
      );
      const data = await response.json();
      setMovieDetail(data);
      setLoading(false);
    } catch (error) {
      console.error("Error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieDetail();
  }, []);

  return (
    <MovieConsumer>
      {({ loading }) => (
        <React.Fragment>
          {loading || activeLoading ? (
            <Loading />
          ) : (
            <React.Fragment>
              <Line />
              <Container>
                <MovieRow>

                  <MovieLeft>
                    <ActivePoster movieDetail={movieDetail} />
                  </MovieLeft>
                  
                  <MovieRight>
                    <ActiveNameDescAndOverview movieDetail={movieDetail} />
                    <ActiveDescription movieDetail={movieDetail}/>
                    <ActiveInfo movieDetail={movieDetail} />
                  </MovieRight>

                </MovieRow>

              </Container>
            </React.Fragment>
          )}
        </React.Fragment>
      )}
    </MovieConsumer>
  );
};
export default ActiveComponent;
