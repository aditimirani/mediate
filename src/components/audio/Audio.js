import React from 'react'
import {AudioContainer, AudioFrequency, AudioRoot} from './AudioStyles'
const Audio = props => {
  
  return(
    <AudioContainer>
       {props.frequency.map((val, key) =>
        <AudioFrequency key={key} height={val}/>
       )}
    </AudioContainer>
  )
}
export default Audio