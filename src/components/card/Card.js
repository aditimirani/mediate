import React from 'react'
import {CardContainer,CardHeader, Hamburger} from './CardStyles'
import {Title}  from '../CommonStyles'
const Card = props =>{
  return(
    <CardContainer backgroundImage={props.backgroundImage}>
      <CardHeader>
        <Title>{props.title}</Title>
        <Hamburger/>
      </CardHeader>
      {props.children}
    </CardContainer>
  )
}
export default Card