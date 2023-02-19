import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Explore from '../components/Explore'
import NavBar from '../components/NavBar'
import Resouces from '../components/Resouces'
import App from './App'
import Footer from '../components/Footer'

const RouteSwitch = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/web3-project' element={<App />} exact />
        <Route path='/Explore' element={<Explore />}  />
        <Route path='/Resouces' element={<Resouces />}  />
      </Routes>
     <Footer />
    </div>
  )
}

export default RouteSwitch