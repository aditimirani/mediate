import styled from 'styled-components'
import Clock from '../../images/icons8-clock.svg'

export const ClockContainer = styled.div`
  color: #222222;
  display:flex;
  opacity: 0.5;
  padding: 20px 0px 20px 10px;
`
export const ClockImage = styled.img`
  background-image: url(${Clock});
  height:20px;
  width:20px;
  background-size: cover;
`
export const Time = styled.div `
  padding:2px;
  `