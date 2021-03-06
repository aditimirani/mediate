import React from 'react'
import {Title}  from '../CommonStyles'
import {AudioContainer, AudioFrequency, AudioPlay, AudioDescription,AudioControl,FrequencyRoot } from './AudioStyles'
  class Audio extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        playing: false
      }
      this.onPlayPauseClick = this.onPlayPauseClick.bind(this)
    }
    onPlayPauseClick() {
      this.setState({
        playing: !this.state.playing
      })
    }
    render(){
    return(
      <AudioContainer>
        <AudioDescription>
        <Title fontColor={'#222222'} fontSize={'12px'} opacity={.6} letterSpacing={'2pt'} fontFamily={`Montserrat-Bold, sans-serif `}>CALMING OCEAN</Title>
        <Title fontColor={'#222222'} fontSize={'12px'} opacity={.6} flexGrow={0}>2.34</Title>
        </AudioDescription>
        <AudioPlay>
          <AudioControl>
          <svg width="108" height="62">
            <defs>
              <filter id='playshadow' x="-20%" y="0" width="200%" height="200%">
                <feOffset result="offOut" in="SourceGraphic" dx="1" dy="5" />
                <feColorMatrix result="matrixOut" in="offOut" type="matrix"
                values="0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 1 0" />
                <feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="1" />
                <feBlend in="SourceGraphic" in2="blurOut" mode="lighten" />
              </filter>
            </defs>
          <path d="M31,0A31,31,0,1,0,31,62 L 87 51 A22,22 0,0,0, 87,11" fill="#ededed" />
            <circle filter="url(#playshadow)" cx="31" cy="31" r="22" fill="#f5f5f5" onClick={this.onPlayPauseClick}></circle>
                {this.state.playing && <rect width="2" height="12" fill="#575757" x="26" y="25" onClick={this.onPlayPauseClick} />}
                {this.state.playing && <rect width="2" height="12" fill="#575757" x="34" y="25" onClick={this.onPlayPauseClick} />}
                {!this.state.playing && <path d="M26 24 L26 38 L38 31 Z" fill="#575757" onClick={this.onPlayPauseClick} />}
          <path d="M72 24 L72 38 L80 31 Z" fill="#575757" />
          <rect width="2" height="12" fill="#575757" x="82" y="25" />
            
          </svg>
          </AudioControl>
          <FrequencyRoot>
            {this.props.frequency.map((val, key) =>
              <AudioFrequency key={key} height={val}/>
            )}
            {this.props.frequency.map((val, key) =>
              <AudioFrequency key={key} height={val} opacity={'0.5'} bgColor={'#222222'}/>
            )}
        </FrequencyRoot>
        </AudioPlay>
      </AudioContainer>
    )
  }
}
export default Audio