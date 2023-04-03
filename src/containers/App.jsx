import React from 'react'
import nft1 from './../img/nfts/1125.webp'
import nft2 from './../img/nfts/zimals-c7e0fff8-2b1a-4e80-9e39-b3b1eb5cce13.jpg'
import nft3 from './../img/nfts/b759ba2174252e1bd5cd3996bad9745d79691e91.webp'
import nft4 from './../img/nfts/thumb_cropped_800x800_7-IzBv7pWqgyCtUCJSJDWz5TWiys9EDM.jpeg'
import nft5 from './../img/nfts/smith-kenny-img-20220330-wa0009.jpg'
import nft6 from './../img/nfts/oyedokun-ridwan-opeyemi-gvvbdecfw.jpg'
import nft7 from './../img/nfts/3e671f98e9e3143393d1b6457126b33fb8c3b3e7.webp'
import nft8 from './../img/nfts/f021298172b94d0ea186eaac3967b9b3.png'
import nft9 from './../img/nfts/nft-artist-design-unnamed-3.jpg'

import icon1 from './../img/icon/wallet.png'
import icon2 from './../img/icon/create.png'
import icon3 from './../img/icon/addwallet.png'
import icon4 from './../img/icon/sell.png'

import nft10 from './../img/nfts/FL5yb4QXsAczzNM.jpg'
import nft11 from './../img/nfts/rashan_kumar-gbnkjhghn.jpg'
import nft12 from './../img/nfts/tcash_official-exoticnft-2803963634670527937-47009641996-4-1080x1080.jpg'
import nft13 from './../img/nfts/unnamed.jpg'
import nft14 from './../img/nfts/unware.jpg'
import nft15 from './../img/nfts/wosfedikq7r71.jpg'

import nft16 from './../img/nfts/E_gVCHnXIAgmJ6w.jpeg'
import nft17 from './../img/nfts/c096cf3085414bdfef58eeb744bf68595a606907.webp'
import nft18 from './../img/nfts/thumb_cropped_1080x1350_9KczXibcm3NOhcCMWnoZ55lnncMY1qM_.jpeg'
import nft19 from './../img/nfts/haze-1024x1024.webp'
import nft20 from './../img/nfts/eyesss-1024x1024.webp'
import nft21 from './../img/nfts/FLaaNoHXIAEMBab.jpg'

import nft22 from './../img/nfts/809d37784efa4c9cb9d917fee93226f4_zipped.jpeg'
import nft23 from './../img/nfts/9779355b-7aed-4d95-a4c9-de598d7b5dc3_02142022091512620a1da080d8f.jpeg'
import nft24 from './../img/nfts/unnamed.webp'
import nft25 from './../img/nfts/FMOYgrrWYAc8mZ0.jpg'
import nft26 from './../img/nfts/tentacion-3d-jader-278350269-723727091991699-8298032161288430785-n.jpg'
import nft27 from './../img/nfts/thumb_cropped_828x786_E_YKdflSfFiDkTH-nDHYCQfqFmABzIcJ.jpeg'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <div className='body'>
      <div className='container-fluid pt-md-5 first-section row mx-auto'>
        <div className='col-lg-6 sec-aside text-center text-md-start'>
          <h1 className='my-5 fs-md-1 fs-3'>
            Create, Imagine,
            Explore and gather 
            <span className='spacial'> Digital Arts </span>
            and
            <span className='spacial'> NFTs </span>
          </h1>

          <h5 className='my-5 fs-5'>
            There are so many available NFTs around the world You can explore
            all your NFTs with this site.
          </h5>
        
        <button className='btn btn-primary button-set px-3 me-md-5'> GET STARTED </button>

        <button className='btn btn-primary button-sett px-3'> Create </button>
        </div>
        <div className='col-lg-6 d-none  d-lg-flex peak'>
          <div className='lead-aside p-3'>
            <div className=' item-lead-aside'>
              <h6>hottest action</h6>

              <div className='love-item-lead-asid d-flex justify-content-between'>
                <h6 className='me-5'>Robotic Technology 3D</h6>
                <div className='love-item-lead-aside ms-5'>
                  <i className="bi bi-heart"></i>
                  <p className='m-0 mt-1'>23</p>
                </div>
              </div>
              <b>collection</b>
              

              <div className='d-flex align-items-center'>
                <i className="bi bi-person-video3 me-4"></i> <span>Paul Andy</span>
              </div>
              
              <div className='my-3'>
              <p className='p-0 m-0'>highest bid</p>
                
                <b>7067 </b> with <b> $563.776 </b>
              </div>
                <button className='btn btn-primary button-set px-3' style={{background: '#671ed9'}}>Place a bid</button>
            </div>
          </div>
        </div>
        <div className='d-flex my-5 justify-content-center'>
          <div className='back-icon me-5'><i className="bi bi-caret-left"></i></div>
          <div className='back-icon'><i className="bi bi-caret-right"></i></div>
        </div>
      </div>

      <div className="py-5 container-fluid second-section ">
        <h1 className='lead-header'>  <i className="bi bi-dot icon-check"></i><small>live bidding</small> </h1>
        <div className="container p-0 p-md-4 outter-scroll  my-4">
          <div className='inner-scroll'>

            <div className="card" >
              <img src={nft1} alt="nft1" className="card-img-top" />
              <div className="card-body text-capitalize">
                <div className="avatars">
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/women/65.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/3.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/33.jpg" alt="woman" />
                  <small className="fw-bolder fs-5 mx-2">30+ place bit. <i className="bi bi-three-dots ms-2"></i> </small>
                </div>
                <h5 className="card-title">Bored apE</h5>
                <p className="card-text">highest bid 56/89</p>
                <div className='d-flex justify-content-between fw-bolder'>
                  <small style={{color: '#651cdf'}}><i className='fab fa-ethereum'></i> 0.8783wETH</small>
                  <small><i className="bi bi-heart fw-bolder " style={{color: '#651cdf'}}></i> 356 </small>
                </div>
              </div>
            </div>

            <div className="card" >
              <img src={nft2} alt="nft1" className="card-img-top" />
              <div className="card-body text-capitalize">
                <div className="avatars">
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/women/65.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/3.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/33.jpg" alt="woman" />
                  <small className="fw-bolder fs-5 mx-2">30+ place bit. <i className="bi bi-three-dots ms-2"></i> </small>
                </div>
                <h5 className="card-title">Bored apE</h5>
                <p className="card-text">highest bid 56/89</p>
                <div className='d-flex justify-content-between fw-bolder'>
                  <small style={{color: '#651cdf'}}><i className='fab fa-ethereum'></i> 0.8783wETH</small>
                  <small><i className="bi bi-heart fw-bolder " style={{color: '#651cdf'}}></i> 356 </small>
                </div>
              </div>
            </div>

            <div className="card" >
              <img src={nft3} alt="nft1" className="card-img-top" />
              <div className="card-body text-capitalize">
                <div className="avatars">
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/women/65.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/3.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/33.jpg" alt="woman" />
                  <small className="fw-bolder fs-5 mx-2">30+ place bit. <i className="bi bi-three-dots ms-2"></i> </small>
                </div>
                <h5 className="card-title">Bored apE</h5>
                <p className="card-text">highest bid 56/89</p>
                <div className='d-flex justify-content-between fw-bolder'>
                  <small style={{color: '#651cdf'}}><i className='fab fa-ethereum'></i> 0.8783wETH</small>
                  <small><i className="bi bi-heart fw-bolder " style={{color: '#651cdf'}}></i> 356 </small>
                </div>
              </div>
            </div>

            <div className="card" >
              <img src={nft4} alt="nft1" className="card-img-top" />
              <div className="card-body text-capitalize">
                <div className="avatars">
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/women/65.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/3.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/33.jpg" alt="woman" />
                  <small className="fw-bolder fs-5 mx-2">30+ place bit. <i className="bi bi-three-dots ms-2"></i> </small>
                </div>
                <h5 className="card-title">Bored apE</h5>
                <p className="card-text">highest bid 56/89</p>
                <div className='d-flex justify-content-between fw-bolder'>
                  <small style={{color: '#651cdf'}}><i className='fab fa-ethereum'></i> 0.8783wETH</small>
                  <small><i className="bi bi-heart fw-bolder " style={{color: '#651cdf'}}></i> 356 </small>
                </div>
              </div>
            </div>

            <div className="card" >
              <img src={nft5} alt="nft1" className="card-img-top" />
              <div className="card-body text-capitalize">
                <div className="avatars">
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/women/65.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/3.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/33.jpg" alt="woman" />
                  <small className="fw-bolder fs-5 mx-2">30+ place bit. <i className="bi bi-three-dots ms-2"></i> </small>
                </div>
                <h5 className="card-title">Bored apE</h5>
                <p className="card-text">highest bid 56/89</p>
                <div className='d-flex justify-content-between fw-bolder'>
                  <small style={{color: '#651cdf'}}><i className='fab fa-ethereum'></i> 0.8783wETH</small>
                  <small><i className="bi bi-heart fw-bolder " style={{color: '#651cdf'}}></i> 356 </small>
                </div>
              </div>
            </div>

            <div className="card" >
              <img src={nft6} alt="nft1" className="card-img-top" />
              <div className="card-body text-capitalize">
                <div className="avatars">
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/women/65.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/3.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/33.jpg" alt="woman" />
                  <small className="fw-bolder fs-5 mx-2">30+ place bit. <i className="bi bi-three-dots ms-2"></i> </small>
                </div>
                <h5 className="card-title">Bored apE</h5>
                <p className="card-text">highest bid 56/89</p>
                <div className='d-flex justify-content-between fw-bolder'>
                  <small style={{color: '#651cdf'}}><i className='fab fa-ethereum'></i> 0.8783wETH</small>
                  <small><i className="bi bi-heart fw-bolder " style={{color: '#651cdf'}}></i> 356 </small>
                </div>
              </div>
            </div>

            <div className="card" >
              <img src={nft7} alt="nft1" className="card-img-top" />
              <div className="card-body text-capitalize">
                <div className="avatars">
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/women/65.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/3.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/33.jpg" alt="woman" />
                  <small className="fw-bolder fs-5 mx-2">30+ place bit. <i className="bi bi-three-dots ms-2"></i> </small>
                </div>
                <h5 className="card-title">Bored apE</h5>
                <p className="card-text">highest bid 56/89</p>
                <div className='d-flex justify-content-between fw-bolder'>
                  <small style={{color: '#651cdf'}}><i className='fab fa-ethereum'></i> 0.8783wETH</small>
                  <small><i className="bi bi-heart fw-bolder " style={{color: '#651cdf'}}></i> 356 </small>
                </div>
              </div>
            </div>

            <div className="card" >
              <img src={nft8} alt="nft1" className="card-img-top" />
              <div className="card-body text-capitalize">
                <div className="avatars">
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/women/65.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/3.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/33.jpg" alt="woman" />
                  <small className="fw-bolder fs-5 mx-2">30+ place bit. <i className="bi bi-three-dots ms-2"></i> </small>
                </div>
                <h5 className="card-title">Bored apE</h5>
                <p className="card-text">highest bid 56/89</p>
                <div className='d-flex justify-content-between fw-bolder'>
                  <small style={{color: '#651cdf'}}><i className='fab fa-ethereum'></i> 0.8783wETH</small>
                  <small><i className="bi bi-heart fw-bolder " style={{color: '#651cdf'}}></i> 356 </small>
                </div>
              </div>
            </div>

            <div className="card" >
              <img src={nft9} alt="nft1" className="card-img-top" />
              <div className="card-body text-capitalize">
                <div className="avatars">
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/women/65.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/3.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/33.jpg" alt="woman" />
                  <small className="fw-bolder fs-5 mx-2">30+ place bit. <i className="bi bi-three-dots ms-2"></i> </small>
                </div>
                <h5 className="card-title">Bored apE</h5>
                <p className="card-text">highest bid 56/89</p>
                <div className='d-flex justify-content-between fw-bolder'>
                  <small style={{color: '#651cdf'}}><i className='fab fa-ethereum'></i> 0.8783wETH</small>
                  <small><i className="bi bi-heart fw-bolder " style={{color: '#651cdf'}}></i> 356 </small>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>

      <div className="py-5 px-md-5 container-fluid thrid-section ">
        <h3 className='lead-header'>Create, showcase and sell your NFTs</h3>
        <div className='outer-set'>
          <div className='inner-set'>
            <div className='card rounded-3 p-3'>
              <div className='icon-group'>
                <img src={icon1} alt="icon" className='card-img-top icon'/>
                <small className='text-uppercase fw-bold'>step 01</small>
              </div>

              <h5 className='my-2'>Setup your wallet</h5>
              <small className='fw-5'>
                There are so many ways to set up your wallet,
                you can create by checking throught our sites and
                also generating NFTs to put in your wallet.
                if you need help kindly check our youtube videos.
              </small>

              <i className="bi bi-arrow-right fw-bolder fs-4 mt-3"></i>

            </div>


            <div className='card rounded-3 p-3'>
              <div className='icon-group'>
                <img src={icon2} alt="icon" className='card-img-top icon'/>
                <small className='text-uppercase fw-bold'>step 02 </small>
              </div>

              <h5 className='my-2'>Create your collections</h5>
              <small className='fw-5'>
               There are many ways to set up your NFT wallet, 
               you can create by checking through are sites also 
               generating NFTs to puts in your wallet.
               if you need help, kindly check our your video.
              </small>

              <i className="bi bi-arrow-right fw-bolder fs-4 mt-3"></i>

            </div>

            
            <div className='card rounded-3 p-3'>
              <div className='icon-group'>
                <img src={icon3} alt="icon" className='card-img-top icon'/>
                <small className='text-uppercase fw-bold'>step 03 </small>
              </div>

              <h5 className='my-2'>Add your NET's</h5>
              <small className='fw-5'>
                After buying, creating your NFTs, your can now add your NFT 
                to your openseas collections and showcase it in the world.
              </small>

              <i className="bi bi-arrow-right fw-bolder fs-4 mt-3"></i>

            </div>

            
            <div className='card rounded-3 p-3'>
              <div className='icon-group'>
                <img src={icon4} alt="icon" className='card-img-top icon'/>
                <small className='text-uppercase fw-bold'>step 04 </small>
              </div>

              <h5 className='my-2'>sell your NFT's</h5>
              <small className='fw-5'>
                After going through all the process, you can now go ahead
                 to sell your NFTs, Viola!!!
              </small>

              <i className="bi bi-arrow-right fw-bolder fs-4 mt-3"></i>

            </div>

            
          </div>
        </div>
      </div>

      <div className="py-5 container-fluid forth-section ">
        <h1 className='lead-header ms-3'> Newest items available for you </h1>
        <div className="container p-0 p-md-4 outter-scroll  my-4">
          <div className='inner-scroll'>

            <div className="card" >
              <img src={nft10} alt="nft1" className="card-img-top" />
              <div className="card-body text-capitalize">
                <div className="avatars">
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/women/65.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/3.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/33.jpg" alt="woman" />
                  <small className="fw-bolder fs-5 mx-2">30+ place bit. <i className="bi bi-three-dots ms-2"></i> </small>
                </div>
                <h5 className="card-title">Bored apE</h5>
                <p className="card-text">highest bid 56/89</p>
                <div className='d-flex justify-content-between fw-bolder'>
                  <small style={{color: '#651cdf'}}><i className='fab fa-ethereum'></i> 0.8783wETH</small>
                  <small><i className="bi bi-heart fw-bolder " style={{color: '#651cdf'}}></i> 356 </small>
                </div>
              </div>
            </div>

            <div className="card" >
              <img src={nft11} alt="nft1" className="card-img-top" />
              <div className="card-body text-capitalize">
                <div className="avatars">
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/women/65.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/3.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/33.jpg" alt="woman" />
                  <small className="fw-bolder fs-5 mx-2">30+ place bit. <i className="bi bi-three-dots ms-2"></i> </small>
                </div>
                <h5 className="card-title">Bored apE</h5>
                <p className="card-text">highest bid 56/89</p>
                <div className='d-flex justify-content-between fw-bolder'>
                  <small style={{color: '#651cdf'}}><i className='fab fa-ethereum'></i> 0.8783wETH</small>
                  <small><i className="bi bi-heart fw-bolder " style={{color: '#651cdf'}}></i> 356 </small>
                </div>
              </div>
            </div>

            <div className="card" >
              <img src={nft12} alt="nft1" className="card-img-top" />
              <div className="card-body text-capitalize">
                <div className="avatars">
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/women/65.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/3.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/33.jpg" alt="woman" />
                  <small className="fw-bolder fs-5 mx-2">30+ place bit. <i className="bi bi-three-dots ms-2"></i> </small>
                </div>
                <h5 className="card-title">Bored apE</h5>
                <p className="card-text">highest bid 56/89</p>
                <div className='d-flex justify-content-between fw-bolder'>
                  <small style={{color: '#651cdf'}}><i className='fab fa-ethereum'></i> 0.8783wETH</small>
                  <small><i className="bi bi-heart fw-bolder " style={{color: '#651cdf'}}></i> 356 </small>
                </div>
              </div>
            </div>

            <div className="card" >
              <img src={nft13} alt="nft1" className="card-img-top" />
              <div className="card-body text-capitalize">
                <div className="avatars">
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/women/65.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/3.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/33.jpg" alt="woman" />
                  <small className="fw-bolder fs-5 mx-2">30+ place bit. <i className="bi bi-three-dots ms-2"></i> </small>
                </div>
                <h5 className="card-title">Bored apE</h5>
                <p className="card-text">highest bid 56/89</p>
                <div className='d-flex justify-content-between fw-bolder'>
                  <small style={{color: '#651cdf'}}><i className='fab fa-ethereum'></i> 0.8783wETH</small>
                  <small><i className="bi bi-heart fw-bolder " style={{color: '#651cdf'}}></i> 356 </small>
                </div>
              </div>
            </div>

            <div className="card" >
              <img src={nft14} alt="nft1" className="card-img-top" />
              <div className="card-body text-capitalize">
                <div className="avatars">
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/women/65.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/3.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/33.jpg" alt="woman" />
                  <small className="fw-bolder fs-5 mx-2">30+ place bit. <i className="bi bi-three-dots ms-2"></i> </small>
                </div>
                <h5 className="card-title">Bored apE</h5>
                <p className="card-text">highest bid 56/89</p>
                <div className='d-flex justify-content-between fw-bolder'>
                  <small style={{color: '#651cdf'}}><i className='fab fa-ethereum'></i> 0.8783wETH</small>
                  <small><i className="bi bi-heart fw-bolder " style={{color: '#651cdf'}}></i> 356 </small>
                </div>
              </div>
            </div>

            <div className="card" >
              <img src={nft15} alt="nft1" className="card-img-top" />
              <div className="card-body text-capitalize">
                <div className="avatars">
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/women/65.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/3.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/33.jpg" alt="woman" />
                  <small className="fw-bolder fs-5 mx-2">30+ place bit. <i className="bi bi-three-dots ms-2"></i> </small>
                </div>
                <h5 className="card-title">Bored apE</h5>
                <p className="card-text">highest bid 56/89</p>
                <div className='d-flex justify-content-between fw-bolder'>
                  <small style={{color: '#651cdf'}}><i className='fab fa-ethereum'></i> 0.8783wETH</small>
                  <small><i className="bi bi-heart fw-bolder " style={{color: '#651cdf'}}></i> 356 </small>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>

      <div className="py-5 container-fluid fifth-section ">
        <div className='d-md-flex justify-content-between '>
          <h1 className='lead-header mb-3 mb-md-0 ms-3 flex-grow-1'> Explore Product </h1>
          <div className='d-flex justify-content-around flex-grow-1'>
            <button className="btn button btn-outline-primary text-uppercase "> <i className="bi bi-grid"></i> All NFTS</button>
            <button className="btn button btn-outline-primary text-uppercase "> <i className="bi bi-megaphone"></i> Live Auction </button>
            <button className="btn button btn-outline-primary text-uppercase "> <i className="bi bi-yin-yang"></i> Sale Type </button>
            <button className="btn button btn-outline-primary text-uppercase "> <i className="bi bi-currency-dollar"></i> Fixed Price </button>
          </div>
          
        </div>
        <div className="container p-0 p-md-4 outter-scroll  my-4">
          <div className='inner-scroll'>

            <div className="card" >
              <img src={nft16} alt="nft1" className="card-img-top" />
              <div className="card-body text-capitalize">
                <div className="avatars">
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/women/65.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/3.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/33.jpg" alt="woman" />
                  <small className="fw-bolder fs-5 mx-2">30+ place bit. <i className="bi bi-three-dots ms-2"></i> </small>
                </div>
                <h5 className="card-title">Bored apE</h5>
                <p className="card-text">highest bid 56/89</p>
                <div className='d-flex justify-content-between fw-bolder'>
                  <small style={{color: '#651cdf'}}><i className='fab fa-ethereum'></i> 0.8783wETH</small>
                  <small><i className="bi bi-heart fw-bolder " style={{color: '#651cdf'}}></i> 356 </small>
                </div>
              </div>
            </div>

            <div className="card" >
              <img src={nft17} alt="nft1" className="card-img-top" />
              <div className="card-body text-capitalize">
                <div className="avatars">
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/women/65.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/3.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/33.jpg" alt="woman" />
                  <small className="fw-bolder fs-5 mx-2">30+ place bit. <i className="bi bi-three-dots ms-2"></i> </small>
                </div>
                <h5 className="card-title">Bored apE</h5>
                <p className="card-text">highest bid 56/89</p>
                <div className='d-flex justify-content-between fw-bolder'>
                  <small style={{color: '#651cdf'}}><i className='fab fa-ethereum'></i> 0.8783wETH</small>
                  <small><i className="bi bi-heart fw-bolder " style={{color: '#651cdf'}}></i> 356 </small>
                </div>
              </div>
            </div>

            <div className="card" >
              <img src={nft18} alt="nft1" className="card-img-top" />
              <div className="card-body text-capitalize">
                <div className="avatars">
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/women/65.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/3.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/33.jpg" alt="woman" />
                  <small className="fw-bolder fs-5 mx-2">30+ place bit. <i className="bi bi-three-dots ms-2"></i> </small>
                </div>
                <h5 className="card-title">Bored apE</h5>
                <p className="card-text">highest bid 56/89</p>
                <div className='d-flex justify-content-between fw-bolder'>
                  <small style={{color: '#651cdf'}}><i className='fab fa-ethereum'></i> 0.8783wETH</small>
                  <small><i className="bi bi-heart fw-bolder " style={{color: '#651cdf'}}></i> 356 </small>
                </div>
              </div>
            </div>

            <div className="card" >
              <img src={nft19} alt="nft1" className="card-img-top" />
              <div className="card-body text-capitalize">
                <div className="avatars">
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/women/65.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/3.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/33.jpg" alt="woman" />
                  <small className="fw-bolder fs-5 mx-2">30+ place bit. <i className="bi bi-three-dots ms-2"></i> </small>
                </div>
                <h5 className="card-title">Bored apE</h5>
                <p className="card-text">highest bid 56/89</p>
                <div className='d-flex justify-content-between fw-bolder'>
                  <small style={{color: '#651cdf'}}><i className='fab fa-ethereum'></i> 0.8783wETH</small>
                  <small><i className="bi bi-heart fw-bolder " style={{color: '#651cdf'}}></i> 356 </small>
                </div>
              </div>
            </div>

            <div className="card" >
              <img src={nft20} alt="nft1" className="card-img-top" />
              <div className="card-body text-capitalize">
                <div className="avatars">
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/women/65.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/3.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/33.jpg" alt="woman" />
                  <small className="fw-bolder fs-5 mx-2">30+ place bit. <i className="bi bi-three-dots ms-2"></i> </small>
                </div>
                <h5 className="card-title">Bored apE</h5>
                <p className="card-text">highest bid 56/89</p>
                <div className='d-flex justify-content-between fw-bolder'>
                  <small style={{color: '#651cdf'}}><i className='fab fa-ethereum'></i> 0.8783wETH</small>
                  <small><i className="bi bi-heart fw-bolder " style={{color: '#651cdf'}}></i> 356 </small>
                </div>
              </div>
            </div>

            <div className="card" >
              <img src={nft21} alt="nft1" className="card-img-top" />
              <div className="card-body text-capitalize">
                <div className="avatars">
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/women/65.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/3.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/33.jpg" alt="woman" />
                  <small className="fw-bolder fs-5 mx-2">30+ place bit. <i className="bi bi-three-dots ms-2"></i> </small>
                </div>
                <h5 className="card-title">Bored apE</h5>
                <p className="card-text">highest bid 56/89</p>
                <div className='d-flex justify-content-between fw-bolder'>
                  <small style={{color: '#651cdf'}}><i className='fab fa-ethereum'></i> 0.8783wETH</small>
                  <small><i className="bi bi-heart fw-bolder " style={{color: '#651cdf'}}></i> 356 </small>
                </div>
              </div>
            </div>

            
          </div>
        </div>

        <div className="container p-0 p-md-4 outter-scroll  my-4">
          <div className='inner-scroll'>

            <div className="card" >
              <img src={nft22} alt="nft1" className="card-img-top" />
              <div className="card-body text-capitalize">
                <div className="avatars">
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/women/65.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/3.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/33.jpg" alt="woman" />
                  <small className="fw-bolder fs-5 mx-2">30+ place bit. <i className="bi bi-three-dots ms-2"></i> </small>
                </div>
                <h5 className="card-title">Bored apE</h5>
                <p className="card-text">highest bid 56/89</p>
                <div className='d-flex justify-content-between fw-bolder'>
                  <small style={{color: '#651cdf'}}><i className='fab fa-ethereum'></i> 0.8783wETH</small>
                  <small><i className="bi bi-heart fw-bolder " style={{color: '#651cdf'}}></i> 356 </small>
                </div>
              </div>
            </div>

            <div className="card" >
              <img src={nft23} alt="nft1" className="card-img-top" />
              <div className="card-body text-capitalize">
                <div className="avatars">
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/women/65.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/3.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/33.jpg" alt="woman" />
                  <small className="fw-bolder fs-5 mx-2">30+ place bit. <i className="bi bi-three-dots ms-2"></i> </small>
                </div>
                <h5 className="card-title">Bored apE</h5>
                <p className="card-text">highest bid 56/89</p>
                <div className='d-flex justify-content-between fw-bolder'>
                  <small style={{color: '#651cdf'}}><i className='fab fa-ethereum'></i> 0.8783wETH</small>
                  <small><i className="bi bi-heart fw-bolder " style={{color: '#651cdf'}}></i> 356 </small>
                </div>
              </div>
            </div>

            <div className="card" >
              <img src={nft24} alt="nft1" className="card-img-top" />
              <div className="card-body text-capitalize">
                <div className="avatars">
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/women/65.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/3.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/33.jpg" alt="woman" />
                  <small className="fw-bolder fs-5 mx-2">30+ place bit. <i className="bi bi-three-dots ms-2"></i> </small>
                </div>
                <h5 className="card-title">Bored apE</h5>
                <p className="card-text">highest bid 56/89</p>
                <div className='d-flex justify-content-between fw-bolder'>
                  <small style={{color: '#651cdf'}}><i className='fab fa-ethereum'></i> 0.8783wETH</small>
                  <small><i className="bi bi-heart fw-bolder " style={{color: '#651cdf'}}></i> 356 </small>
                </div>
              </div>
            </div>

            <div className="card" >
              <img src={nft25} alt="nft1" className="card-img-top" />
              <div className="card-body text-capitalize">
                <div className="avatars">
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/women/65.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/3.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/33.jpg" alt="woman" />
                  <small className="fw-bolder fs-5 mx-2">30+ place bit. <i className="bi bi-three-dots ms-2"></i> </small>
                </div>
                <h5 className="card-title">Bored apE</h5>
                <p className="card-text">highest bid 56/89</p>
                <div className='d-flex justify-content-between fw-bolder'>
                  <small style={{color: '#651cdf'}}><i className='fab fa-ethereum'></i> 0.8783wETH</small>
                  <small><i className="bi bi-heart fw-bolder " style={{color: '#651cdf'}}></i> 356 </small>
                </div>
              </div>
            </div>

            <div className="card" >
              <img src={nft26} alt="nft1" className="card-img-top" />
              <div className="card-body text-capitalize">
                <div className="avatars">
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/women/65.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/3.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/33.jpg" alt="woman" />
                  <small className="fw-bolder fs-5 mx-2">30+ place bit. <i className="bi bi-three-dots ms-2"></i> </small>
                </div>
                <h5 className="card-title">Bored apE</h5>
                <p className="card-text">highest bid 56/89</p>
                <div className='d-flex justify-content-between fw-bolder'>
                  <small style={{color: '#651cdf'}}><i className='fab fa-ethereum'></i> 0.8783wETH</small>
                  <small><i className="bi bi-heart fw-bolder " style={{color: '#651cdf'}}></i> 356 </small>
                </div>
              </div>
            </div>

            <div className="card" >
              <img src={nft27} alt="nft1" className="card-img-top" />
              <div className="card-body text-capitalize">
                <div className="avatars">
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/women/65.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/3.jpg" alt="woman" />
                  <img className='avatars__item' src="https://randomuser.me/api/portraits/men/33.jpg" alt="woman" />
                  <small className="fw-bolder fs-5 mx-2">30+ place bit. <i className="bi bi-three-dots ms-2"></i> </small>
                </div>
                <h5 className="card-title">Bored apE</h5>
                <p className="card-text">highest bid 56/89</p>
                <div className='d-flex justify-content-between fw-bolder'>
                  <small style={{color: '#651cdf'}}><i className='fab fa-ethereum'></i> 0.8783wETH</small>
                  <small><i className="bi bi-heart fw-bolder " style={{color: '#651cdf'}}></i> 356 </small>
                </div>
              </div>
            </div>

            
          </div>
        </div>

        <Link to="/Explore">
         <button className='buttn btn '> View All </button>
        </Link>
      </div>
      
      <div className='py-5 container-fluid six-section '>
        <h1 className='lead-header ms-3 my-3 my-md-0'> Top Collections </h1>

        <div className='container-fluid justify-content-around p-1 m-0 p-md-4 row '>

          < div className=' mb-3 m-md-3 col-md-3 border align-items-center p-2 py-3 d-flex justify-content-between text-start'>
            <div className='d-flex align-items-center justify-content-between text-start'>
              <div className=' mx-md-3 me-2'>
                <small className='mx-1'>1</small>
                <img src="https://images.generated.photos/pYO5ZRiQ9qpIVL44DmztCJiQCtyXMLgtiR6Leho_wmg/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODI5NzQ3LmpwZw.jpg" alt="profile peg" />
              </div>
              <div>
                <b>Bored Ape yatch Club</b>
                <small className='d-block'>Flour price: <i className="fab fa-ethereum"></i> 78</small>
              </div>
            </div>
            <div>
              <b className='text-uniform'>+67.59</b>
              <small className="d-flex"><i className="bi bi-currency-dollar"></i> 5,859.75</small>
            </div>

          </div>

          < div className=' mb-3 m-md-3 col-md-3 border align-items-center p-2 py-3 d-flex justify-content-between text-start'>
            <div className='d-flex align-items-center justify-content-between text-start'>
              <div className=' mx-md-3 me-2'>
                <small className='mx-1'>2</small>
                <img src="https://images.generated.photos/hwVSrUzUta8Bml3fLt6R-N7DpiIZ2dRo42ksPJB6LpQ/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTAxNTI3LmpwZw.jpg" alt="profile peg" />
              </div>
              <div>
                <b>Bored Ape yatch Club</b>
                <small className='d-block'>Flour price: <i className="fab fa-ethereum"></i> 78</small>
              </div>
            </div>
            <div>
              <b className='text-uniform'>+67.59</b>
              <small className="d-flex"><i className="bi bi-currency-dollar"></i> 5,859.75</small>
            </div>

          </div>

          < div className=' mb-3 m-md-3 col-md-3 border align-items-center p-2 py-3 d-flex justify-content-between text-start'>
            <div className='d-flex align-items-center justify-content-between text-start'>
              <div className=' mx-md-3 me-2'>
                <small className='mx-1'>3</small>
                <img src="https://images.generated.photos/Takpfzd9vWIbl4Q3IT5fMqbvWtdXqtRBZqgKCHaScFA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjQ5OTk3LmpwZw.jpg" alt="profile peg" />
              </div>
              <div>
                <b>Bored Ape yatch Club</b>
                <small className='d-block'>Flour price: <i className="fab fa-ethereum"></i> 78</small>
              </div>
            </div>
            <div>
              <b className='text-uniform'>+67.59</b>
              <small className="d-flex"><i className="bi bi-currency-dollar"></i> 5,859.75</small>
            </div>

          </div>

          < div className=' mb-3 m-md-3 col-md-3 border align-items-center p-2 py-3 d-flex justify-content-between text-start'>
            <div className='d-flex align-items-center justify-content-between text-start'>
              <div className=' mx-md-3 me-2'>
                <small className='mx-1'>4</small>
                <img src="https://images.generated.photos/2wJn-NNCWcJ1g16wRqGS5iP7Gs7BiyrZmzxPPJnQZbo/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjkzMTcyLmpwZw.jpg" alt="profile peg" />
              </div>
              <div>
                <b>Bored Ape yatch Club</b>
                <small className='d-block'>Flour price: <i className="fab fa-ethereum"></i> 78</small>
              </div>
            </div>
            <div>
              <b className='text-uniform'>+67.59</b>
              <small className="d-flex"><i className="bi bi-currency-dollar"></i> 5,859.75</small>
            </div>

          </div>

          < div className=' mb-3 m-md-3 col-md-3 border align-items-center p-2 py-3 d-flex justify-content-between text-start'>
            <div className='d-flex align-items-center justify-content-between text-start'>
              <div className=' mx-md-3 me-2'>
                <small className='mx-1'>5</small>
                <img src="https://images.generated.photos/6AtTAD-IBuJNNrt0CdKzRzop4l0l8c6l6D2u-C7szBA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjM0Njk2LmpwZw.jpg" alt="profile peg" />
              </div>
              <div>
                <b>Bored Ape yatch Club</b>
                <small className='d-block'>Flour price: <i className="fab fa-ethereum"></i> 78</small>
              </div>
            </div>
            <div>
              <b className='text-uniform'>+67.59</b>
              <small className="d-flex"><i className="bi bi-currency-dollar"></i> 5,859.75</small>
            </div>

          </div>

          < div className=' mb-3 m-md-3 col-md-3 border align-items-center p-2 py-3 d-flex justify-content-between text-start'>
            <div className='d-flex align-items-center justify-content-between text-start'>
              <div className=' mx-md-3 me-2'>
                <small className='mx-1'>6</small>
                <img src="https://images.generated.photos/fTPKSuoFZ_cfopfSGgkN6Z5zM6_I_HN-qSm87vBHJUE/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzYwMzU0LmpwZw.jpg" alt="profile peg" />
              </div>
              <div>
                <b>Bored Ape yatch Club</b>
                <small className='d-block'>Flour price: <i className="fab fa-ethereum"></i> 78</small>
              </div>
            </div>
            <div>
              <b className='text-uniform'>+67.59</b>
              <small className="d-flex"><i className="bi bi-currency-dollar"></i> 5,859.75</small>
            </div>

          </div>

          < div className=' mb-3 m-md-3 col-md-3 border align-items-center p-2 py-3 d-flex justify-content-between text-start'>
            <div className='d-flex align-items-center justify-content-between text-start'>
              <div className=' mx-md-3 me-2'>
                <small className='mx-1'>7</small>
                <img src="https://images.generated.photos/ocVAMD06sDmnJigqwxWIVqLJJOAksOc9U3HKN99fkmY/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Njc1MjQyLmpwZw.jpg" alt="profile peg" />
              </div>
              <div>
                <b>Bored Ape yatch Club</b>
                <small className='d-block'>Flour price: <i className="fab fa-ethereum"></i> 78</small>
              </div>
            </div>
            <div>
              <b className='text-uniform'>+67.59</b>
              <small className="d-flex"><i className="bi bi-currency-dollar"></i> 5,859.75</small>
            </div>

          </div>

          < div className=' mb-3 m-md-3 col-md-3 border align-items-center p-2 py-3 d-flex justify-content-between text-start'>
            <div className='d-flex align-items-center justify-content-between text-start'>
              <div className=' mx-md-3 me-2'>
                <small className='mx-1'>8</small>
                <img src="https://images.generated.photos/cuTymoZ_5VFMtQaAi7Wq3JKeDRxwEJ3_JA_fyVKvSxM/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzQ5MDY1LmpwZw.jpg" alt="profile peg" />
              </div>
              <div>
                <b>Bored Ape yatch Club</b>
                <small className='d-block'>Flour price: <i className="fab fa-ethereum"></i> 78</small>
              </div>
            </div>
            <div>
              <b className='text-uniform'>+67.59</b>
              <small className="d-flex"><i className="bi bi-currency-dollar"></i> 5,859.75</small>
            </div>

          </div>

          < div className=' mb-3 m-md-3 col-md-3 border align-items-center p-2 py-3 d-flex justify-content-between text-start'>
            <div className='d-flex align-items-center justify-content-between text-start'>
              <div className=' mx-md-3 me-2'>
                <small className='mx-1'>9</small>
                <img src="https://images.generated.photos/opXktI8dE0VTFDHpmpr3HIhpBAE3I5RWuEIcZtz_LrA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDY5NDkwLmpwZw.jpg" alt="profile peg" />
              </div>
              <div>
                <b>Bored Ape yatch Club</b>
                <small className='d-block'>Flour price: <i className="fab fa-ethereum"></i> 78</small>
              </div>
            </div>
            <div>
              <b className='text-uniform'>+67.59</b>
              <small className="d-flex"><i className="bi bi-currency-dollar"></i> 5,859.75</small>
            </div>

          </div>

          < div className=' mb-3 m-md-3 col-md-3 border align-items-center p-2 py-3 d-flex justify-content-between text-start'>
            <div className='d-flex align-items-center justify-content-between text-start'>
              <div className=' mx-md-3 me-2'>
                <small>10</small>
                <img src="https://images.generated.photos/nV0Ha0nHk4qJwuKxCft02hzCqLMQD6htTvMlYyPJwbk/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTQwNTAyLmpwZw.jpg" alt="profile peg" />
              </div>
              <div className='check'>
                <b>Bored Ape yatch Club</b>
                <small className='d-block'>Flour price: <i className="fab fa-ethereum"></i> 78</small>
              </div>
            </div>
            <div>
              <b className='text-uniform'>+67.59</b>
              <small className="d-flex"><i className="bi bi-currency-dollar"></i> 5,859.75</small>
            </div>

          </div>

          < div className=' mb-3 m-md-3 col-md-3 border align-items-center p-2 py-3 d-flex justify-content-between text-start'>
            <div className='d-flex align-items-center justify-content-between text-start'>
              <div className=' mx-md-3 me-2'>
                <small>11</small>
                <img src="https://images.generated.photos/ZxG6lhXV7KXkTO6eiEO7BOjaNyBcJewnq1rG-CGgf9g/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzQwOTc3LmpwZw.jpg" alt="profile peg" />
              </div>
              <div className='check'>
                <b>Bored Ape yatch Club</b>
                <small className='d-block'>Flour price: <i className="fab fa-ethereum"></i> 78</small>
              </div>
            </div>
            <div>
              <b className='text-uniform'>+67.59</b>
              <small className="d-flex"><i className="bi bi-currency-dollar"></i> 5,859.75</small>
            </div>

          </div>

          < div className=' mb-3 m-md-3 col-md-3 border align-items-center p-2 py-3 d-flex justify-content-between text-start'>
            <div className='d-flex align-items-center justify-content-between text-start'>
              <div className=' mx-md-3 me-2'>
                <small>12</small>
                <img src="https://images.generated.photos/HcZbU9wvyK9_69SpohkhVwKe51YLbY4uWrs9R_O7Lh8/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTU3NTk3LmpwZw.jpg" alt="profile peg" />
              </div>
              <div className='check'>
                <b>Bored Ape yatch Club</b>
                <small className='d-block'>Flour price: <i className="fab fa-ethereum"></i> 78</small>
              </div>
            </div>
            <div>
              <b className='text-uniform'>+67.59</b>
              <small className="d-flex"><i className="bi bi-currency-dollar"></i> 5,859.75</small>
            </div>

          </div>

          < div className=' mb-3 m-md-3 col-md-3 border align-items-center p-2 py-3 d-flex justify-content-between text-start'>
            <div className='d-flex align-items-center justify-content-between text-start'>
              <div className=' mx-md-3 me-2'>
                <small>13</small>
                <img src="https://images.generated.photos/YxP8X7ubuaR5TCHuk9BZvwoZEYZLZ6bzH4xKmGIf62s/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzY1OTk0LmpwZw.jpg" alt="profile peg" />
              </div>
              <div className='check'>
                <b>Bored Ape yatch Club</b>
                <small className='d-block'>Flour price: <i className="fab fa-ethereum"></i> 78</small>
              </div>
            </div>
            <div>
              <b className='text-uniform'>+67.59</b>
              <small className="d-flex"><i className="bi bi-currency-dollar"></i> 5,859.75</small>
            </div>

          </div>

          < div className=' mb-3 m-md-3 col-md-3 border align-items-center p-2 py-3 d-flex justify-content-between text-start'>
            <div className='d-flex align-items-center justify-content-between text-start'>
              <div className=' mx-md-3 me-2'>
                <small>14</small>
                <img src="https://images.generated.photos/1XyRfMs03-RWzDnAwyM0AZ3twEC-1s1QQjuo6a1Uryw/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDI1Mjk3LmpwZw.jpg" alt="profile peg" />
              </div>
              <div className='check'>
                <b>Bored Ape yatch Club</b>
                <small className='d-block'>Flour price: <i className="fab fa-ethereum"></i> 78</small>
              </div>
            </div>
            <div>
              <b className='text-uniform'>+67.59</b>
              <small className="d-flex"><i className="bi bi-currency-dollar"></i> 5,859.75</small>
            </div>

          </div>

          < div className=' mb-3 m-md-3 col-md-3 border align-items-center p-2 py-3 d-flex justify-content-between text-start'>
            <div className='d-flex align-items-center justify-content-between text-start'>
              <div className=' mx-md-3 me-2'>
                <small>15</small>
                <img src="https://images.generated.photos/opXktI8dE0VTFDHpmpr3HIhpBAE3I5RWuEIcZtz_LrA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDY5NDkwLmpwZw.jpg" alt="profile peg" />
              </div>
              <div className='check'>
                <b>Bored Ape yatch Club</b>
                <small className='d-block'>Flour price: <i className="fab fa-ethereum"></i> 78</small>
              </div>
            </div>
            <div>
              <b className='text-uniform'>+67.59</b>
              <small className="d-flex"><i className="bi bi-currency-dollar"></i> 5,859.75</small>
            </div>

          </div>
        </div>

          <Link to='/Resouces' className='buttn btn text-center mb-4'> View All </Link>
      </div>

      <div className=' container px-5 d-none d-md-block seventh-section '>
         
        <div className='m-3 d-inline-flex flex-column align-items-center' style={{width: '-webkit-fit-content'}}>
          <img src="https://cdn-icons-png.flaticon.com/512/825/825445.png" className=' d-block' style={{width: '50px'}} alt="" />
          <small className='mt-3 text-uppercase text-white fw-bolder'>dogecoin</small>
        </div>

        <div className='m-3 d-inline-flex flex-column align-items-center' style={{width: '-webkit-fit-content'}}>
          <img src="https://banner2.cleanpng.com/20190418/rgf/kisspng-ethereum-portable-network-graphics-computer-icons-developers-icon-request-icon-ethereum-5cb941c1cb12b1.1213852915556448658318.jpg" className=' d-block' style={{width: '50px', borderRadius: '50%'}} alt="" />
          <small className='mt-3 text-uppercase text-white fw-bolder'>ethereum</small>
        </div>

        <div className='m-3 d-inline-flex flex-column align-items-center' style={{width: '-webkit-fit-content'}}>
          <img src="https://cryptologos.cc/logos/xrp-xrp-logo.png" className=' d-block bg-light p-2' style={{width: '50px', borderRadius: '50%'}} alt="" />
          <small className='mt-3 text-uppercase text-white fw-bolder'>xrp</small>
        </div>

        <div className='m-3 d-inline-flex flex-column align-items-center' style={{width: '-webkit-fit-content'}}>
          <img src="https://logos-world.net/wp-content/uploads/2020/08/Bitcoin-Logo.png" className=' d-block' style={{width: '90px'}} alt="" />
          <small className='mt-3 text-uppercase text-white fw-bolder'>bitcoin</small>
        </div>

         <div className='m-3 d-inline-flex flex-column align-items-center' style={{width: '-webkit-fit-content'}}>
           <img src="https://w7.pngwing.com/pngs/202/402/png-transparent-tether-cryptocurrency-price-market-capitalization-computer-icons-others-white-logo-author.png" className=' d-block bg-light p-2' style={{width: '75px', borderRadius: '50%'}} alt="" />
           <small className='mt-3 text-uppercase text-white fw-bolder'>Tether</small>
         </div>

         <div className='m-3 d-inline-flex flex-column align-items-center' style={{width: '-webkit-fit-content'}}>
           <img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Terra-luna-luna-logo.png" className=' d-block bg-light p-2' style={{width: '50px', borderRadius: '50%'}} alt="" />
           <small className='mt-3 text-uppercase text-white fw-bolder'>Luna</small>
         </div>
          
      </div>

     </div>

  )
}

export default App