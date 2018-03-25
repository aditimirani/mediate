import  {injectGlobal} from 'styled-components';
import BebasNeueRegular from '../src/font/BebasNeueRegular.ttf';


// added custom font BebasNeueRegular
injectGlobal`
  @font-face {
    font-family: 'BebasNeueRegular';
    src: url(${BebasNeueRegular});
  }
  body {
    margin:15px;
    font-family:'BebasNeueRegular'
  }
`;