import styled from 'styled-components'
import pause from '../../images/pause-circle.svg'
const calculateHeight= (height) => {
  return (500 / height)
}
export const AudioContainer = styled.div`
  border-radius: 18px;
  border: 1px solid #e6e6e6;
  padding: 10px;
  margin-top:73px;
  min-height: 5rem;
  background-color: #ffffff;
  width:100%;

`
export const AudioDescription = styled.div `
  display: flex;
 `
 export const FrequencyRoot = styled.div `
 display: flex;
 flex-grow:1;
 `
 export const FrequencyRoot1 = styled.div `
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
 
 `
export const AudioPlay = styled.div`
  display: flex;
`
export const AudioImg = styled.img`
  background-image: url(${pause});
  height:30px;
  width:30px;
  background-size:cover;
`
export const AudioFrequency = styled.div`
  width:2px;
  height:${({ height = '50px' }) => `${calculateHeight(height)}px`};
  background:${({ bgColor = '#50E3C2' }) => bgColor};
  display:inline-block;
  margin-right:7px;
  opacity: ${({ opacity = '1' }) => opacity};
  border: 1px solid ${({ bgColor = '#50E3C2' }) => bgColor};
  border-radius: 3px;

`
export const AudioRoot = styled.div`
display: flex;
`