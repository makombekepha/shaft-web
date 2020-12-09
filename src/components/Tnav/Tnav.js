import React, {useState} from 'react'
import { Link } from 'react-router-dom'
//import { MdFingerprint } from 'react-icons/md'
import { FaBars,FaTimes } from 'react-icons/fa'
//import { Button } from '../Button/Button'
import './Tnav.css'
import ban from '../../assets/shaftLogo.png'
import { IconContext } from 'react-icons/lib'

const Tnav = () => {
    const [click, setClick]=useState(false)
    //const [button, setButton]=useState(true)

    const handleClick=()=>setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return (
        <>
        <IconContext.Provider value={{color:'blue'}}>
        <div className="navbar">
            <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                  <img src={ban} alt="" />
              </Link>
              <div className="menu-icon" onClick={handleClick}>
                 { click ? <FaTimes /> : <FaBars />}
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className="nav-item">
                      <Link to='/' className="nav-links" onClick={closeMobileMenu}>Home</Link>
                  </li>
                  <li className="nav-item">
                      <Link to='/aboutus' className="nav-links" onClick={closeMobileMenu}>About Us</Link>
                  </li>
                  <li className="nav-item">
                      <Link to='/services' className="nav-links" onClick={closeMobileMenu}>Services</Link>
                  </li>
                  <li className="nav-item">
                      <Link to='/employees' className="nav-links" onClick={closeMobileMenu}>Our Team</Link>
                  </li>
                  <li className="nav-item">
                      <Link to='/projects' className="nav-links" onClick={closeMobileMenu}>Projects</Link>
                  </li>
                  <li className="nav-item">
                      <Link to='/process' className="nav-links" onClick={closeMobileMenu}>Process</Link>
                  </li>
                  <li className="nav-item">
                      <Link to='/testimonials' className="nav-links" onClick={closeMobileMenu}>Testimonials</Link>
                  </li>
                  <li className="nav-item">
                      <Link to='/contacts' className="nav-links" onClick={closeMobileMenu}>Contacts</Link>
                  </li>
              </ul>
            </div>
        </div>
        </IconContext.Provider>
        </>
    )
}

export default Tnav