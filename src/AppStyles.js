import  {injectGlobal} from 'styled-components';
import myfont from '../src/font/BebasNeueRegular.ttf';


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