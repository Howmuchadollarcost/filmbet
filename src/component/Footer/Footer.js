import React from 'react';
import styled from "styled-components";

const FooterContainer = styled.div`
    width: 100%;
    color: #858585;
    display:flex;
    font-weight: 300;
    justify-content:center;
    align-items: center;
    background: #000;
    height: 50px;
    span{
        padding: 0 5px;


        :first-child{
            color: #fff;
            font-weight: 500;
        }
    }


`

function Footer(props) {
    return (
        <FooterContainer>
            <span>Built With</span>
            <span>React</span>
            <span>styled-component</span>
            <span>react-spinners</span>
        </FooterContainer>
    );
}

export default Footer;