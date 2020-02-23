import React from 'react';
import styled from "styled-components";

import {MovieConsumer} from '../../MovieContext';

const FooterContainer = styled.div`
    width: 100%;
    color: #858585;
    display: ${props => props.active ? 'none' : 'flex'};
    font-weight: 300;
    justify-content:center;
    align-items: center;
    background: #2C2E32;
    height: 50px;

    span{
        padding: 0 5px;
        font-size: 0.8em;
        :first-child{
            color: #fff;
            font-weight: 500;
        }
    }
`

function Footer(props) {
    return (
        <MovieConsumer>
            {({active}) => (
            <FooterContainer active={active}>
                <span>Built With</span>
                <span>React</span>
                <span>styled-component</span>
                <span>react-spinners</span>
            </FooterContainer>
            )}


        </MovieConsumer>
    );
}

export default Footer;