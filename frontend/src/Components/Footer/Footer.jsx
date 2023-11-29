import React from 'react'
import './Footer.css';
import footer_logo from '../Assets/logo.png';
import insta from '../Assets/instagram_icon.png';
import pint from '../Assets/pintester_icon.png';
import whatsapp from '../Assets/whatsapp_icon.png';

var year = new Date();

const Footer = () => {
  return (
    
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>Craft_Buy</p>
      </div>
      <ul className="footer-link">
        <li>About</li>
        <li>Product</li>
        <li>Contact</li>
        <li>Company</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
            <img src={insta} alt="instagram icon" />
        </div>    
        <div className="footer-icon-container">    
            <img src={pint} alt="" />
        </div>   
        <div className="footer-icon-container"> 
            <img src={whatsapp} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright {year.getFullYear()} - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
