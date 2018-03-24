import styed from 'styled-components'
import styled ,{injectGlobal} from 'styled-components';
import hamburger from '../../images/hamburger.svg'
import heart from '../../images/likeblackheartbutton.svg'
import pauseImg from '../../images/icons8-pause-50.png'
import myfont from '../../font/BebasNeueBold.ttf';

// added custom font BebasNeueRegular
injectGlobal`
  @font-face {
    font-family: 'BebasNeueRegular';
    src: url(${myfont});
  }
  body {
    margin:15px;
    font-family:'BebasNeueRegular'
  }
`;
export const CardContainer = styled.div`
  background-image: url(${({backgroundImage =''}) => backgroundImage});
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
export const Title = styled.div `
  color: ${({ fontColor = 'black' }) => fontColor};
  opacity: ${({ opacity = '1' }) => opacity};
  flex-grow: ${({ flexGrow = '1' }) => flexGrow};
  display: flex;
  font-size: ${({ fontSize = '15px' }) => fontSize};
  justify-content: space-between;
  margin-bottom: ${({ MarginBottom = '24px' }) => MarginBottom};
  padding-left:14px;
  letter-spacing: ${({ letterSpacing = '2.8pt' }) => letterSpacing};
  font-family: ${({ FontFamily = `'Montserrat-SemiBold', sans-serif` }) => FontFamily} ;
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

 export const MainTitle = styled.div`
  font-size:80px;
  margin-left:10px;
 `
