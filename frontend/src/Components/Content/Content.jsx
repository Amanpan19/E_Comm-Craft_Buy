import React from 'react'
import './Content.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import model_img from '../Assets/hero_image.png';

const Content = () => {
  return (
    <div className='content'>
    <div className='contentLeft'>
        <h2>NEW ARRIVALS ONLY</h2>
        <div className='tags'>
            <div className='hand-icon'>
                <img src={hand_icon} alt="" />
            </div>
            <p>Collections</p>
            <p>For Everyone</p>
        </div>
        <div className='latest-btn'>
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
    </div>
    <div className='contentRight'></div>
      <img src={model_img} alt="" />
    </div>
  )
}

export default Content
