import React from 'react'
import Card from '../card/Card'
import MeditateCardDetails from '../meditateCardDetails/MeditateCardDetails'
import AudioContainer from '../audio/Audio'
import dailyActivity from '../../cache/schedule-jsonresponse-withaudio.json'
import {ClockContainer, ClockImage, Time} from './MeditateStyles'

//getting data from json file
const {dailyActivities = []} = dailyActivity.result
const {activities = []} = dailyActivities[0]

//Root Meditate component
const Meditate = props => {
  const frequency = [20,10,30,20,40,30,50,40,20]
  return (
    <div>
      <Card backgroundImage={activities[0].landscapeDesktopImage.url} title={activities[0].title} >
        <MeditateCardDetails  contentTitle={activities[0].contentTitle}/>
        <AudioContainer frequency={frequency}/>
        <ClockContainer><ClockImage/><Time>{`10.00 ${'Minutes'}`}</Time></ClockContainer>
      </Card>
      
    </div>
  )
}

export default Meditate