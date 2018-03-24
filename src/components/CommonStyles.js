import styled from 'styled-components';
export const Title = styled.div `
  color: ${({ fontColor = 'black' }) => fontColor};
  opacity: ${({ opacity = '1' }) => opacity};
  flex-grow: ${({ flexGrow = '1' }) => flexGrow};
  display: flex;
  font-size: ${({ fontSize = '15px' }) => fontSize};
  justify-content: space-between;
  margin-bottom: ${({ marginBottom = '24px' }) => marginBottom};
  padding-left:14px;
  letter-spacing: ${({ letterSpacing = '2.8pt' }) => letterSpacing};
  font-family: ${({ fontFamily = `'Montserrat-SemiBold', sans-serif` }) => fontFamily} ;
  text-transform : uppercase;
`
export const MainTitle = styled.div`
  font-size:80px;
  margin-left:10px;
 `
