import React from 'react'
import Customers from './pages/Customers/Customers'
import Pricing from './pages/Pricing/Pricing'
import Product from './pages/Product/Product'
import Resources from './pages/Resources/Resources'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Error404 from './components/Error404/Error404'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
            <Route path='/' element={<Product />}/>
            <Route path='/customers' element={<Customers />}/>
            <Route path='/pricing' element={<Pricing />}/>
            <Route path='/resources' element={<Resources />}/>
            <Route path="*" element={<Error404/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
