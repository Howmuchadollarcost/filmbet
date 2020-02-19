import React from "react";
import styled from "styled-components";

const breakpointSm = `@media screen and (max-width: 450px)`;


const Hero = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://www.studiodaily.com/wp-content/uploads/2019/09/downton-abbey_lead.jpg");
  height: 200px;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  margin-bottom: 48px;

  h1 {
    text-align: center;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3.5rem;
    font-weight: 500;
    text-transform: uppercase;

    ${breakpointSm}{
      font-size: 2.5rem;
    }
  }

`;

function index(props) {
  return (
    <Hero>
      <h1>Dine livsfilmer</h1>
    </Hero>
  );
}

export default index;
