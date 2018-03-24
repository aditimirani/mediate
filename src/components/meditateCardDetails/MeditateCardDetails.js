import React from 'react'
import {Title,MainTitle}  from '../CommonStyles'
import {HeartRate,HeartRoot,Flex, KarmaPoints, KarmaText}  from './MeditateCardDetailsStyles'
const MeditateCardDetails = props => {
  return (
    <div>
      <Flex>
        <MainTitle fontSize={'32px'} flexGrow={1} letterSpacing={'normal'}>
          OCEAN
        </MainTitle>
        <HeartRoot>
          <HeartRate/>
        </HeartRoot>
        <div>
        <KarmaPoints>98</KarmaPoints>
        <KarmaText>KARMA POINTS EARNED</KarmaText>
        </div>
        </Flex>
      <Title fontSize={'16px'} letterSpacing={'2pt'} marginBottom={'10px'}>{props.contentTitle}</Title>
      <Title letterSpacing={'2.8pt'}>READY BEFORE YOU START</Title>
    </div>
  )
}
export default MeditateCardDetails