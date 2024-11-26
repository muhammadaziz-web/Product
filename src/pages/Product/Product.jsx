import React from 'react'
import WorkAt from '../../components/WorkAt/WorkAt'
import WasBuilt from '../../components/WasBuilt/WasBuilt'
import Management from '../../components/Management/Management'
import CustomerSupport from '../../components/CustomerSupport/CustomerSupport'
import Collaborative from '../../components/Collaborative/Collaborative'
import Quick from '../../components/Quick/Quick'
import PriceTable from '../../components/PriceTable/PriceTable'
import Cliants from '../../components/Cliants/Cliants'
import Join from '../../components/Join/Join'
import Contents from '../../components/Contents/Contents'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

const Product = () => {
  return (
    <div>
      <Navbar />      
      <WorkAt />
      <WasBuilt />
      <Management />
      <CustomerSupport />
      <Collaborative />
      <Quick />
      <Contents />
      <PriceTable />
      <Cliants />
      <Join />
      <Footer />
    </div>
  )
}

export default Product
