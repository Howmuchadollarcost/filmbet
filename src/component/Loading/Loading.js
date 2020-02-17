import React from 'react';
import styled from 'styled-components';

import { MoonLoader } from "react-spinners";

const Container = styled.div`
    display:flex;
    justify-content:center;
    position: absolute;
    width: 100%;
    margin-top: 50px;
`

function Loading(props) {
    return (
        <Container>
            <MoonLoader color={"#fff"} />
        </Container>
    );
}

export default Loading;