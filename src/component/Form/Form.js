import React from "react";
import styled from "styled-components";

const SearchForm = styled.section`
  position:relative;
  display:flex;
  justify-content: center;

  input{
    position:absolute;
    top:-80px;
    padding: 15px 50px;
    border: 2px solid red;
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
