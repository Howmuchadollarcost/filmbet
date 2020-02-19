import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = styled.header`
  height: 70px;
  width: 100%;
  background-color: #0f0f0f;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.p`
  font-size: 2.5rem;
  display: inline-block;
  color: #f7f7f7;
  text-decoration: none;
  font-family: "Monoton", cursive;
  margin: 0 15px;
`;

const GitSection = styled.div`
  font-size: 1.5rem;
  display: inline-block;
  color: #f7f7f7;
  text-decoration: none;
  font-family: "Monoton", cursive;
  margin: 0 15px;
`;

function index(props) {
  return (
    <Navbar>
      <Link to="/">
        <Logo>HvilkeFilm</Logo>
      </Link>
      <Link to="/">
        <GitSection>Git</GitSection>
      </Link>
    </Navbar>
  );
}

export default index;
