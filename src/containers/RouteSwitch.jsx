import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Products from '../components/Products'
import Stats from '../components/Stats'
import App from './App'

const RouteSwitch = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/Yinktech-nfts' element={<App />} exact />
        <Route path='/Stats' element={<Stats />}  />
        <Route path='/Products' element={<Products />}  />
      </Routes>
    </div>
  )
}

export default RouteSwitch