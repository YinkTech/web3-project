import React from 'react'

const Footer = () => {
  return (
    <div>
       <div className="footer cursor-pointer container-fluid justify-content-center row my-5">
        <div className='col-md-3'>
          <div className='logo my-3'>
            <span><i class="bi bi-virus mx-2"></i></span>
            Yink
            <span>Tech</span>
          </div>
          <small className='fw-bolder' >Created with the collaboration of over 80 of the 
                 world's best Nuron and NFT artist
          </small>

          <div className='d-flex mt-4 '>
            <i class="fab fa-facebook-f fs-6 p-1 px-2 me-3 " style={{borderRadius: '50%', border: '2px solid #651cdf', color: '#651cdf'}}></i>
            <i class="fab fa-instagram fs-4 p-1 px-2 me-3 " style={{borderRadius: '50%', color: '#651cdf'}}></i>
            <i class="fab fa-linkedin fs-4 p-1 px-2 me-3 " style={{borderRadius: '50%', color: '#651cdf'}}></i>
            <i class="fab fa-twitter fs-6 p-1 px-2 me-3 " style={{borderRadius: '50%', border: '2px solid #651cdf', color: '#651cdf'}}></i>
          </div>
        </div>
        
        <hr className='separator d-md-none my-4'/>

          <div className=" col-md-2">
            <h4 className='fw-bolder mb-3'> Useful Links </h4>
              <small className='d-block fw-bold mb-2'>collectibles</small>
              <small className='d-block fw-bold mb-2'>Photography</small>
              <small className='d-block fw-bold mb-2'>Trading cards</small>
              <small className='d-block fw-bold'>Virtual worlds</small>
          </div>
        
        <hr className='separator d-md-none my-4'/>


          <div className=" col-md-2">
            <h4 className='fw-bolder mb-3'> Useful Links </h4>
              <small className='d-block fw-bold mb-2'>collectibles</small>
              <small className='d-block fw-bold mb-2'>Photography</small>
              <small className='d-block fw-bold mb-2'>Trading cards</small>
              <small className='d-block fw-bold'>Virtual worlds</small>
          </div>
        
        <hr className='separator d-md-none my-4'/>

          <div className='col-md-3'>
            <h4 className='fw-bolder mb-3'> Newsletter </h4>
              
              <small className='fw-bolder' >
                Subscribe to our newsletter to
                recieve early discount offers and updates.
              </small>

              <div className='d-flex mt-4 '>
                <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="Enter your Email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                  <button class="buttn btn " type="button" id="button-addon2"><i class="fab fa-telegram-plane"></i></button>
                </div>
              </div>
        </div>

      </div>

        
      <hr className='separator my-4'/>

      <div className=" text-center m-2 fw-bolder ">&copy; Copyright YinkTech. All Rights Reserved.</div>
    
    </div>
  )
}

export default Footer