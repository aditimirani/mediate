import styled from 'styled-components'
const calculateHeight= (height) => {
  // To do :  we can calculate the frequency height based on passed height 
  return height
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
 export const AudioControl = styled.div `
 display: flex;
 flex-grow:1;
 `
 export const FrequencyRoot = styled.div `
  display: flex;
  align-items: center;
 
 `
export const AudioPlay = styled.div`
  display: flex;
`
export const AudioFrequency = styled.div`
  width:2px;
  height:${({ height = '50' }) => `${calculateHeight(height)}px`};
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