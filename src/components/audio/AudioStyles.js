import styled from 'styled-components'
const calculateHeight= (height) => {
  return (500 / height)
}
export const AudioContainer = styled.div`
  border-radius: 5px;
  border: 1px solid grey;
  padding: 10px;
  min-height: 5rem;
  background-color: #ffffff;
  margin:30px 30px 30px 0;
`
export const AudioFrequency = styled.div`
  width:2px;
  height:${({ height = '50px' }) => `${calculateHeight(height)}px`};
  background:#50E3C2;
  display:inline-block;
  margin-right:10px;
`
export const AudioRoot = styled.div`
display: flex;
`