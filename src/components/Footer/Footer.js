import React from 'react';
import './Footer.css';
import ban from '../../assets/shaftLogo.png'
//import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
//import { MdFingerprint } from 'react-icons/md';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h4>About Us</h4>
            <Link to='/aboutus'>About Shaft Co. Limited</Link>
            <Link to='/testimonials'>Testimonials</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/services'>Services</Link>
            <Link to='/employees'>Our Team</Link>
          </div>
          <div className='footer-link-items'>
            <h4>Contact Us</h4>
            <Link to='/'>07 05000089 or 07 86151760</Link>
            <Link to='/'>shaft.ltd.inc@gmail.com</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h4>Location</h4>
            <Link to='/'>Shule View</Link>
            <Link to='/'>Office No. 01 First Floor,</Link>
            <Link to='/'>P.O BOX 64-40404</Link>
            <Link to='/'>Rongo, of Homabay-Kenya</Link>
          </div>
          <div className='footer-link-items'>
            <h4>Connect with us</h4>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
            <img src={ban} alt="" width="70px" height="70px" />
            </Link>
          </div>
         
          <small className='website-rights'>Shaft Co. Limited © 2020</small>
          <small className='website-rights'>Designed by @Cheque_Koluoch</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;