import styled from 'styled-components'
import heartImg from '../../images/likeblackheartbutton.svg'
export const HeartRoot = styled.div`
  opacity:.7;
  height: 30px;
  width:30px;
  border: 3px solid #222222;
  border-radius: 18px;
  margin-left:20px;
`
export const HeartRate = styled.div`
  background-image: url(${heartImg});
  height:15px;
  width: 15px;
  background-size:cover;
  margin: 9px;
`
export const Flex = styled.div `
  display: flex;
  `
export const KarmaText = styled.div `
  font-size: 10px;
  margin-left: 11px
  opacity:.5;
  font-family: 'Montserrat-Bold', sans-serif;
 `
export const KarmaPoints = styled.div `
  display: flex;
  color:#50E3C2;
  padding:10px;
  font-size:20px;
 `
 export const RootMeditate = styled.div`
  padding:40px 40px 0px 40px;
 `