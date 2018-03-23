import styed from 'styled-components'
import styled from 'styled-components';
import hamburger from '../../images/hamburger.svg'
import heart from '../../images/likeblackheartbutton.svg'
import pauseImg from '../../images/icons8-pause-50.png'
export const CardContainer = styed.div`
  background-image: url(${({backgroundImage =''}) => backgroundImage});
  background-color: ${({backgroundColor ='#fff'}) => backgroundColor};
  border-radius: 5px; 
  display: flex;
  flex-direction: column;
  padding:40px 40px 0px 40px;
`
export const CardHeader = styed.div`
  width: 100%;
  display: flex;
`
export const Title = styed.div `
  color: black;
  flex-grow: 1;
  display: flex;
  font-size: ${({ fontSize = '0px' }) => fontSize};
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: Montserrat-SemiBold;
  letter-spacing: 2.8pt;
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