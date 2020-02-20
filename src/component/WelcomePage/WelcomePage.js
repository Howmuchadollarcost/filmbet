import React, { Component } from 'react';
import styled from 'styled-components';
import  animation  from './animation'; 


const Container = styled.div`
   z-index: 200;
   position: fixed;
   display: ${props => props.isOpen ? 'flex' : 'none'};
   justify-content: center;
   align-items: center;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   background: #0D0D0D;
   animation: ${props => props.isClosing ? animation.fadeOut : null} 0.3s;
`;

const LogoContainer = styled.div`
   position: relative;
   display: flex;
   width: ${props => props.width};
   padding-bottom: 1vh;
   overflow: hidden;
   transition: all 0.5s;
   animation: ${props => props.isClosing ? animation.scaleOut : animation.scale} 0.3s ease;
`;

const PartContainer = styled.div`
   position: relative;
   display: ${props => props.hidden ? 'none' : 'flex'};
   align-items: flex-end;
   height: 100%;
`;

const Logo = styled.h1`
   color:#fff;
   font-size: 3rem;
   width: 6rem;
   display:flex;

   div:first-child{
      color: #F16C20;
      padding: 0 10px;
   }
   div:last-child{
      color: #1395BA;
      animation:spin 1s linear infinite;
   }
   @keyframes spin { from { -webkit-transform: rotate(0deg);} to {transform:rotate(360deg);}
`


export default class WelcomeScreen extends Component {
   state = {
      isOpen: true,
      isClosing: false,
   }

   componentDidMount() {
      setTimeout(() => {
         this.setState({ isClosing: true });
      }, 1700);
      setTimeout(() => {
         this.setState({
            isClosing: false,
            isOpen: false,
         });
      }, 2000);
   }

   render() {
      const { isOpen, isClosing } = this.state;

      return (
         <Container isOpen={isOpen || isClosing} isClosing={isClosing}>
            <LogoContainer width={this.state.width} isClosing={isClosing}>
               <PartContainer>
                   <Logo><div>H</div><div>F</div></Logo>
               </PartContainer>
            </LogoContainer>
         </Container>
      );
   }
}