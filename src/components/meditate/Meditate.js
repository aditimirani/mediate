import React from 'react'
import Card from '../card/Card'
import MeditateCardDetails from '../meditateCardDetails/MeditateCardDetails'
import AudioContainer from '../audio/Audio'
import dailyActivity from '../../cache/schedule-jsonresponse-withaudio.json'
const backgroundImage = 'https://c7823c74fcf5919154bf-dc9422fbfab3e488dbd72b998b6187ac.ssl.cf4.rackcdn.com/content/4000/3552/images/landmob-swiss-ball-dumbbell-chest-press-power.jpg'
const {dailyActivities = []} = dailyActivity.result
const {activities = []} = dailyActivities[0]
console.log('activities', activities[0])
const Meditate = props => {
  const frequency = [30,10,40,20,70,50,60,70,40,30,80]
  return (
    <div>
      <Card backgroundImage={backgroundImage}>
        <MeditateCardDetails/>
        <AudioContainer frequency={frequency}/>
      </Card>
      
    </div>
  )
}

export default Meditate