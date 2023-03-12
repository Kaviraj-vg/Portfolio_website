import React from 'react'
import './footer.css'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
const Footer = () => {
  return (
    <footer> 
        <a href="#" className='footer__logo'>KAVIRAJ VG</a>

        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.instagram.com/kaviraj_vg/"><FiInstagram/></a>
          <a href="https://twitter.com/Kaviraj_vg"><IoLogoTwitter/></a>
        </div>

        <div className="footer__copyright">
          <small>&copy; Kaviraj VG. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer