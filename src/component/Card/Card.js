import React from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';

import { Titleformatter } from '../../utils/TitleFormatter'

const CardWrapper = styled.div`
    position: relative;
    display: flex;
    margin: 5px 20px 0 5px;
    box-sizing:border-box;

    a{
        width: 200px;
        text-decoration:none;


        :hover{
            transform: scale(1.1);
            overflow: hidden;
            transition: 0.2s ease-in-out all;
        }
    }

`

const CardBase = styled.div`
    width: 200px;
    text-decoration:none;
`

const CardImage = styled.img`
    width: 100%;
    border-radius: 5px;

`
const CardText = styled.p`
    text-align:center;
    width: 200px;
    display:flex;
    justify-content:center;

    span{
        margin: 0 5px;
        padding: 0 5px;
        background:#3D3D3D;
        color: #fff;
        border-radius: 1px;
    }
`

function Card(props) {
    return (
        <CardWrapper>
            <Link to={`${props.id}`}>
            <CardBase>
                <CardImage src={props.image} alt={props.title} />
                <CardText> {Titleformatter(props.title)} <span>{props.rating}</span></CardText>
            </CardBase>   
            </Link> 
        </CardWrapper>
    );
}



export default Card;