import React from 'react';
import styled from "styled-components";

const FooterContainer = styled.div`
    width: 100%;
    color: #858585;

    span{
        
    }

    a{
        display: inline-block;
        text-decoration:none;
        padding: 5px;
    }
`

function Footer(props) {
    return (
        <FooterContainer>
            <span>Built With</span>
            <a></a>
        </FooterContainer>
    );
}
oc
export default Footer;