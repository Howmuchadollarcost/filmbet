import React from "react";
import styled from "styled-components";

const TMDB_KEY = "9b5af6d9f992e2550944919a011154b7";
const API = "https://api.themoviedb.org/3/movie/";


const Line = styled.hr`
  width: 80%;
  background: #fff;
`

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

const MovieImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 25px;
  box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.2);
  margin: 20px 15px;
`;

const MovieRight = styled.div`
  flex: 1 1 50%;
  color: #fff;
`;

const MovieTitle = styled.h2`
  font-size: 3rem;
  color: #fff;
  font-family: monospace;
  margin: 25px 15px;
`;
const MovieDesc = styled.div`
  display: inline-flex;
  align-items: center;
  width: 250px;
  justify-content: space-around;
  margin: 20px 0;

  .genre {
    display: inline;
    padding-left: 5px;
  }

  .rating {
    background: #323232;
    padding: 3px;
    border-radius: 4px;
    font-weight: 800;
  }
`;

const MovieOverview = styled.div`
  margin: 20px 15px;
  width: 100%;
`;

const MovieInfo = styled.section`
  color: #fff;
  .Movie__info__title {
    color: #343434;
    margin: 0 15px;
  }
`;

class ActiveComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieDetail: {}
    };
  }

  fetchMovieDetail = async id => {
    const response = await fetch(
      `${API}${id}?api_key=${TMDB_KEY}&language=en-US`
    );
    const data = await response.json();
    this.setState({ movieDetail: data });
  };

  componentDidMount() {
    const id = this.props.location.pathname.slice(1);
    this.fetchMovieDetail(id);
  }

  render() {
    return (
      <React.Fragment>
      <Line />
      <Container>
        <MovieRow>
          <MovieLeft>
            <MovieImage
              src={`https://image.tmdb.org/t/p/w500/${this.state.movieDetail.poster_path}`}
              alt={this.state.movieDetail.title}
            />
          </MovieLeft>

          <MovieRight>
            <MovieTitle>{this.state.movieDetail.title}</MovieTitle>
            <MovieDesc>
              <div className="rating">
                {this.state.movieDetail.vote_average}
              </div>
              <div className="genres">
                <div className="genre">Drama</div>
                <div className="genre">Crime</div>
              </div>
              <div className="desc">{this.state.movieDetail.adult}</div>
            </MovieDesc>
            <MovieOverview>{this.state.movieDetail.overview}</MovieOverview>
            <MovieInfo>
              <p>
                <span className="Movie__info__title">Release date:</span>{" "}
                {this.state.movieDetail.release_date}
              </p>
              <p>
                <span className="Movie__info__title">Duration:</span>{" "}
                {this.state.movieDetail.runtime}
              </p>
              <p>
                <span className="Movie__info__title">Producer:</span>Q.
                Tarantino
              </p>
              <p>
                <span className="Movie__info__title">
                  Originial Language:
                </span>
                {this.state.movieDetail.original_language}
              </p>
            </MovieInfo>
          </MovieRight>
        </MovieRow>
      </Container>
    </React.Fragment>
    );
  }
}

export default ActiveComponent;
