import React, { useEffect } from 'react'
import PricingPriceTable from '../../components/PricingPriceTable/PricingPriceTable'
import Enterprice from '../../components/Enterprice/Enterprice'
import IsBeing from '../../components/IsBeing/IsBeing'
import Frequently from '../../components/Frequently/Frequently'
import Join from "../../components/Join/Join"
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

const Pricing = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <div>
      <Navbar />
      <PricingPriceTable />
      <Enterprice />
      <IsBeing />
      <Frequently />
      <Join />
      <Footer />
    </div>
  )
}

export default Pricing