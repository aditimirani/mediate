import React from 'react'
import {CardContainer,CardHeader, Title, Hamburger} from './CardStyles'

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