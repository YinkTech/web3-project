import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='container-fluid px-md-5 py-3 main-nav d-md-flex align-items-baseline justify-content-around'>
      <div className='logo'>
        <span><i class="bi bi-virus mx-2"></i></span>
        Yink
        <span>Tech</span>
      </div>

      <div className=' d-none d-md-inline search-container'>
        <input type="search" />
        <i className='bi bi-search fs-5 fw-5 mx-3'></i>
      </div>
      
      <div>
        <small className='navItems'>
          <Link to={`/`} style={{color: '#671edf'}}> explore</Link>
        </small>
        <small className='navItems'>
          <Link to={`/`}> stats</Link>
        </small>
        <small className='navItems'>
          <Link to={`/`}> resources</Link>
        </small>
        <small className='navItems'>
          <Link to={`/`}> create</Link>
        </small>
      </div>

      <div className='d-flex'>
        <div className="nav-icons">
          <i className="bi bi-person-fill fs-5"></i>
        </div>

        <div className="nav-icons">
          <i className="bi bi-wallet fs-5"></i>
        </div>
      </div>
    </div>
  )
}

export default NavBar