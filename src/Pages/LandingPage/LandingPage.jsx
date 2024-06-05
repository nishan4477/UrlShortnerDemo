import React from 'react'
import "./LandingPage.scss"
import HeroBanner from '../../components/HeroBanner/HeroBanner'
import LinkShortner from '../../components/LinkShortner/LinkShortner'
import Statistics from '../../components/Statistics/Statistics'
import BoostLink from '../../components/BoostLink/BoostLink'


const LandingPage = () => {
  return (
    <div>
        <HeroBanner/>
        <LinkShortner/>
        <Statistics />
        <BoostLink />
        
        
    </div>

  )
}

export default LandingPage