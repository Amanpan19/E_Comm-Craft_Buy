import React from 'react'
import './Offer.css';
import exclusive from '../Assets/exclusive_image.png'

const Offer = () => {
  return (
    <div className='offers'>
        <div className="offers_left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>Only On Best Sellers Products</p>
            <button>Check Now</button>
        </div>
        <div className="offers_right">
            <img src={exclusive} alt="" />
        </div>
    </div>
  )
}

export default Offer
