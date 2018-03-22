import styed from 'styled-components'
import styled from 'styled-components';
export const CardContainer = styed.div`
  min-height : 10rem;
  border: 1px solid black;
  border-radius: 5px; 
  display: flex;

`
export const Title = styed.h1 `
  color: black;
  flex-grow: 1;
  display: flex;
 justify-content: space-between;
`
export const Hamburger = styled.img`
  margin: 0;
  padding: 0;
  cursor: pointer;
  max-height: 23px;
  flex-grow: 1;
  background: red;

`