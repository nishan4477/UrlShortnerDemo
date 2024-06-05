import React from 'react'
import "./LandingPage.scss"
import HeroBanner from '../../components/HeroBanner/HeroBanner'
import LinkShortner from '../../components/LinkShortner/LinkShortner'
import Statistics from '../../components/Statistics/Statistics'
import BoostLink from '../../components/BoostLink/BoostLink'


const LandingPage = () => {
  return (
    <main>
        <HeroBanner/>
        <LinkShortner/>
        <Statistics />
        <BoostLink />
        
        
    </main>

  )
}

export default LandingPage