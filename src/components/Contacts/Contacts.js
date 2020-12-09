import React from 'react'
import './Contacts.css'
import { IoMdCall } from 'react-icons/io';
import { ImLocation } from 'react-icons/im';
import { FiMail } from 'react-icons/fi';
import { SiMinutemailer } from 'react-icons/si';
//import hero from '../../assets/track2.jpeg'

const Contacts = () => {
    return (
       <div style={{fontWeight:'100',fontSize:'16px'}}>
            <div className="hero-wrapper">
                <img 
                src="https://images.unsplash.com/photo-1558731991-cb3430a08bb7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=794&q=80"
                 alt="" />
                   <div className='contacts-title'>
                      <h1>Contact Us</h1>
                   </div>
             
                
            </div>
            <div className="row">
            <div className="sett">  
              <div className="col">
              
<div className="row">
    <div className="col s12 m7">
      <div className="card1">
      <h3 style={{textAlign:'center',color:'#1261A0'}}>Ready to live your way? We’re here to help.</h3>
        <div className="card-content">
          <p>When it comes to building, you deserve to have the home you really want.
               So let’s have a chat about what that looks like for you.
               Simply fill in the form below and we’ll get in touch.</p>
            <br/>
               <p>Have a question about the building process? 
                   We’d be happy to help! Contact Us on:
                    </p>
                    <ul style={{paddingLeft:'15px'}}>
                     <li>   <IoMdCall style={{color:'#1261A0'}}/>  07 05000089</li>
                     <li>   <IoMdCall style={{color:'#1261A0'}}/> 07 86151760</li>
                     <li>   <FiMail style={{color:'#1261A0'}}/> shaft.ltd.inc@gmail.com</li>
                     <li>   <SiMinutemailer style={{color:'#1261A0'}}/> P.O BOX 64-40404, Rongo, Kenya</li>
                     <li>    <ImLocation style={{color:'#1261A0'}}/> Shule View, Office No. 01 First Floor, Rongo, Off Homabay Road</li>
                    </ul>
                    
        </div>
        
      </div>
    </div>
  </div>
  </div>

              </div>
              <div className="sett">
              <div className="col s12">
              
              <div className="row">
    <form className="col s12" style={{color:'#fff'}}>
      <div className="row">
        <div className="input-field col s12">
          <input id="first_name" type="text" className="validate"/>
          <label htmlFor="first_name">Your Name</label>
        </div>
      </div>

     
      <div className="row">
        <div className="input-field col s12">
          <input id="email" type="email" className="validate"/>
          <label htmlFor="email">Your Email</label>
        </div>
      </div>

     
      <div className="row">
        <div className="input-field col s12">
          <input id="password" type="number" className="validate"/>
          <label htmlFor="password">Your Phone</label>
        </div>
      </div>
        <div className="row">
        <div className="input-field col s12">
          <label htmlFor="last_name">Do you have land?</label>
        </div>
      </div>
      <p>  
      <label>
        <input name="group1" type="radio" style={{backgroundColor:'#1261A0'}}/>
        <span>Yes</span>
      </label>
    </p>
    <p >
      <label>
        <input name="group1" type="radio" style={{backgroundColor:'#1261A0'}}/>
        <span>No</span>
      </label>
    </p>
    <div className="row">
        <div className="input-field col s12">
          <input id="last_name" type="text" className="validate"/>
          <label htmlFor="last_name">If you have land, where is it located?</label>
        </div>
      </div>
     
      <div className="row">
        <div className="input-field col s12">
          <textarea id="textarea1" className="materialize-textarea">Your Message</textarea>
          <label htmlFor="textarea1"></label>
        </div>
      </div>
      <a className="waves-effect waves-light btn" href="#k" style={{backgroundColor:'#1261A0'}}>Send</a>
    </form>
  </div>
              </div>
              </div>
            </div>
       </div>
        
    )
}

export default Contacts
