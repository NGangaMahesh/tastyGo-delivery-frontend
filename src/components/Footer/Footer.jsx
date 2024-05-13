import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className='footer-content-left'>
            <img className='icon-brand' src={assets.icon} alt=""/>
            <p>TastyGo: Your go-to food delivery for a world of flavors at your doorstep. From local favorites to global cuisines, satisfy every craving with ease. With seamless ordering and swift delivery, elevate your dining experience with TastyGo today.</p> 
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt='' />
                <img src={assets.twitter_icon} alt='' />
                <img src={assets.linkedin_icon} alt='' />
            </div>
        </div>
        <div className='footer-content-center'>
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivey</li>
                <li>Pivacy Policy</li>
            </ul>
        </div>
        <div className='footer-content-right'>
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>(+91) 9870003210</li>
                <li>tastygo@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p>Copyright 2024 @ tastygo.com All Right Reversed.</p>
    </div>
  )
}

export default Footer
