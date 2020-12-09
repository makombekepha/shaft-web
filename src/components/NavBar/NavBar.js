import React,{useEffect,useState} from 'react'
import 'materialize-css';
import './NavBar.css'
import M from  'materialize-css/dist/js/materialize.min.js';
//import { a } from 'react-router-dom'
import {NavDropdown} from 'react-bootstrap'

const NavBar = () => {
   const [click,setClick]=useState(false)

   const handleClick=()=>setClick(!click)
   
    useEffect(()=>{
        let sidenav = document.querySelector('#slide-out');
        M.Sidenav.init(sidenav, {
          onOpenStart: function(sidenav) {
            sidenav.M_Sidenav._overlay.remove();
        }
        });
       

        let elems = document.querySelectorAll('.dropdown-trigger');
         M.Dropdown.init(elems, {inDuration: 100, outDuration: 50});

         let collapsible = document.querySelectorAll(".collapsible");

         M.Collapsible.init(collapsible, {});
    },[])
    return (
        <div style={{backgroundColor:"#1261A0"}}>
  <nav>     
    <div className="nav-wrapper" >
      <a href="index.js" onClick={handleClick} style={{color:'blue'}} data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <a href="index.js" className="brand-logo right" style={{color:'blue'}}>Logo</a>

      <ul id="dropdown1" className="dropdown-content">
  <li><a href="#!">one</a></li>
  <li><a href="#!">two</a></li>
  <li className="divider"></li>
  <li><a href="#!">three</a></li>
</ul>
      <ul id="nav-mobile" className="hide-on-med-and-down nav-items">
         <li><a href="/">Home</a></li>
         <li><a href="aboutus">About</a></li>
         <li>
         <NavDropdown title="Services" id="collasible-nav-dropdown" className="kik">
        <a href="#action/3.1">Multilevel BUildings Construction</a>
        <a href="#action/3.2">Repairs and Maintenance</a>
        <a href="#action/3.3">Interior Designs and Installation</a>
        <a href="#action/3.4">Equipment Hire</a>
        <a href="#action/3.2">Excuvator Works</a>
        <a href="#action/3.3">Site Preparation</a>
        <a href="#action/3.4">Dumping</a>
        <a href="#action/3.3">Building Materials Delivery</a>
        <a href="#action/3.4">Road Murraming and Buttimen Standardizing</a>
        </NavDropdown>
         </li>
         <li><a href="employees">Meet Your Builder</a></li>
         <li><a href="projects">Projects</a></li>
         <li><a href="process">Process</a></li>
         <li><a href="testimonials" >Testimonials</a></li>
         <li><a href="contacts">Contact</a></li>
      </ul>
    </div>
 </nav> 

  <ul id="slide-out" className={click ? "sidenav":"side-close"}>
    
  <li><a onClick={()=>setClick(false)} href="/">Home</a></li>    
  <li><a onClick={()=>setClick(false)} href="aboutus">About</a></li>
         
  <li>
    <ul className="collapsible">
     <li>
     
     <div className="collapsible-header">
       <i className="material-icons" style={{display:'none'}}></i>Services</div>
       <div className="collapsible-body" style={{paddingLeft:'20px',fontSize:'12px'}}>
        <a href="#action/3.1">Multilevel BUildings Construction</a><br/>
        <a href="#action/3.2">Repairs and Maintenance</a><br/>
        <a href="#action/3.3">Interior Designs and Installation</a><br/>
        <a href="#action/3.4">Equipment Hire</a><br/>
        <a href="#action/3.2">Excuvator Works</a><br/>
        <a href="#action/3.3">Site Preparation</a><br/>
        <a href="#action/3.4">Dumping</a><br/>
        <a href="#action/3.3">Building Materials Delivery</a><br/>
        <a href="#action/3.4">Road Murraming and Buttimen Standardizing</a><br/>
    </div>
      </li>
     
    </ul>
  </li>
         <li><a onClick={()=>setClick(false)} href="employees">Meet Your Builder</a></li>
         <li><a onClick={()=>setClick(false)} href="projects">Projects</a></li>
         <li><a onClick={()=>setClick(false)} href="process">Process</a></li>
         <li><a onClick={()=>setClick(false)} href="testimonials">Testimonials</a></li>
         <li><a onClick={()=>setClick(false)} href="contacts">Contact</a></li>
  </ul>
  
        </div>
    )
}

export default NavBar
