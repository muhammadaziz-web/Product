import React from 'react'
import OurClients from '../../components/OurClients/OurClients'
import WhyChoose from '../../components/WhyChoose/WhyChoose'
import HowProduct from '../../components/HowProduct/HowProduct'
import JoinThousand from '../../components/JoinThousand/JoinThousand'
import Join from '../../components/Join/Join'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

const Customers = () => {
  return (
    <div>
        <Navbar />
        <OurClients />
        <WhyChoose />
        <HowProduct />
        <JoinThousand />
        <Join />
        <Footer />
    </div>
  )
}

export default Customers
