import React, { useEffect } from 'react'
import GreatBusiness from '../../components/GreatBusiness/GreatBusiness'
import LatestStories from '../../components/LatestStories/LatestStories'
import ContactUs from '../../components/ContactUs/ContactUs'
import SendAMessage from '../../components/SendAMessage/SendAMessage'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

const Resources = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

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
