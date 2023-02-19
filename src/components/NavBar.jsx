import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <nav className="navbar px-md-5 py-3 navbar-expand-lg bg-body-tertiary main-nav" >
      <div className="container-fluid text-center">
          <Link style={{color: 'inherit', textDecoration: 'none'}} to={`/web3-project`}>
            <div className='logo'>
              <span><i className="bi bi-virus mx-2"></i></span>
              Yink
              <span>Tech</span>
            </div>
          </Link>
          <div className='ms-5 mx-3 d-none d-lg-flex search-container'>
            <input type="search" />
            <i className='bi bi-search fs-5 fw-5 mx-3'></i>
          </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-ellipsis-v"></i>
        </button>
        <div className="collapse justify-content-around text-end navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item navItems">
              <Link to={`/Explore`} style={{color: '#671edf'}}> explore</Link>
            </li>
            <li className="nav-item navItems">
              <Link to={`/Resouces`}> resources</Link>
            </li>
          </ul>
          <hr className='d-md-none' />
          <div className='d-flex justify-content-end'>
           <div className="nav-icons">
             <i className="bi bi-person-fill fs-5"></i>
           </div>

           <div className="nav-icons" data-bs-toggle="modal" data-bs-target="#exampleModal">
             <i className="bi bi-wallet fs-5"></i>
           </div>

             <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
               <div className="modal-dialog">
                 <div className="modal-content">
                   <div className="modal-header">
                     <h1 className="modal-title fs-5" id="exampleModalLabel" style={{color: '#651cdf'}} >Connect Wallet</h1>
                     <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                   </div>
                   <div className="modal-body" style={{color: '#651cdf'}}>
                     <div className='d-flex align-items-center px-2 justify-content-between'>
                       <small className='fs-4'>MetaMask</small> 
                       <img  style={{border: '2px solid #651cdf', borderRadius: '50%', width: '70px'}} className="p-2 px-3" src="https:  seeklogo.com/images/M/metamask-logo-3ED24848EE-seeklogo.com.png" alt="" />
                     </div>
                     <hr className='separator my-3' />
                     <div className='d-flex align-items-center px-2 justify-content-between'>
                       <small className='fs-4'>WalletConnect</small> 
                       <img  style={{border: '2px solid #651cdf', borderRadius: '50%', width: '70px'}} className="p-2 px-3" src="https:  gitcoin.co/dynamic/avatar/walletconnect" alt="" />
                     </div>
                   </div>
                   <div className="modal-footer">
                     <button type="button" className="btn buttn" data-bs-dismiss="modal">Close</button>
                   </div>
                 </div>
               </div>
             </div>

         </div>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default NavBar