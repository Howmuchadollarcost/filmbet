import React from "react";
import styled from "styled-components";

const SearchForm = styled.section`
  position:relative;
  display:flex;
  justify-content: center;

  input{
    width: 70%;
    height: 38px;
    position:absolute;
    top:-80px;
    padding: 6px 10px;
    border: 1px solid #d1d1d1;
    border-radius:3px;
    box-shadow: none;
    appearance: none;
    box-sizing: border-box;
  }

`;

function index(props) {
  return (
    <SearchForm>
      <input
        type="text"
        name="query"
        id="query"
        placeholder="Type title,year,director or anything..."
      />
    </SearchForm>
  );
}
export default index;
