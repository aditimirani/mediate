import React from 'react'
import {Title,MainTitle}  from '../card/CardStyles'
import {HeartRate,HeartRoot,Flex, KarmaPoints, FlexKarma}  from './MeditateCardDetailsStyles'
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
        <FlexKarma>KARMA POINTS EARNED</FlexKarma>
        </div>
        </Flex>
      <Title fontSize={'18px'} letterSpacing={'2pt'} marginBottom={'10px'}>{props.contentTitle}</Title>
      <Title letterSpacing={'2.8pt'}>READY BEFORE YOU START</Title>
    </div>
  )
}
export default MeditateCardDetails