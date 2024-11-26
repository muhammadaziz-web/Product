import React from 'react'
import GreatBusiness from '../../components/GreatBusiness/GreatBusiness'
import LatestStories from '../../components/LatestStories/LatestStories'
import ContactUs from '../../components/ContactUs/ContactUs'
import SendAMessage from '../../components/SendAMessage/SendAMessage'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

const Resources = () => {
  return (
    <div>
        <Navbar />
        <GreatBusiness />
        <LatestStories />
        <ContactUs />
        <SendAMessage />
        <Footer />
    </div>
  )
}

export default Resources
