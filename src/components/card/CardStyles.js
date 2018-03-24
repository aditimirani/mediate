
import styled from 'styled-components';
import hamburger from '../../images/hamburger.svg'

export const CardContainer = styled.div`
  background-image: url(${({backgroundImage =''}) => backgroundImage.portraitDesktopImage.url});
  // added media query to handle responsive image 
  @media screen and (min-width: 767px) {  
    background-image: url(${({backgroundImage =''}) => backgroundImage.landscapeDesktopImage.url});
    background-repeat: no-repeat;
  }
  background-size:cover;
  background-color: ${({backgroundColor ='#fff'}) => backgroundColor};
  border-radius: 5px; 
  display: flex;
  flex-direction: column;
  padding:40px 40px 0px 26px;
`
export const CardHeader = styled.div`
  width: 100%;
  display: flex;
  
`
export const Hamburger = styled.img`
  margin: 0;
  padding: 0;
  cursor: pointer;
  min-height: auto;
  min-width: 40px;
  flex-grow: 0;
  background-image: url(${hamburger});
  background-repeat: no-repeat;
`

 