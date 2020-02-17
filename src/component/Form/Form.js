import React from "react";
import styled from "styled-components";
import { MovieConsumer } from "../../MovieContext";

const SearchForm = styled.section`
  position:relative;
  display:flex;
  justify-content: center;

  input{
    width: 70%;
    height: 40px;
    position:absolute;
    top:-70px;
    padding: 6px 10px;
    border: 1px solid #d1d1d1;
    border-radius:3px;
    box-shadow: none;
    appearance: none;
    box-sizing: border-box;
    outline:none;
    font-family: 'Roboto', sans-serif;


    :focus{
      color: #333;
      border-color: #888;
      outline: 0;
    }
  }

`;

function index() {
  return (
    <MovieConsumer>
      {({handleChange}) => (
        <SearchForm>
          <input
            type="text"
            name="query"
            id="query"
            placeholder="Find Movie..."
            autoComplete="off"
            onChange={handleChange}
          />
        </SearchForm>
      )}
    </MovieConsumer>

  );
}
export default index;
