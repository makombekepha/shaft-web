import React from 'react'
import './AboutUs.css'
import hero from '../../assets/cont.jpg'
import person from '../../assets/conts.jpeg'
import {Link} from 'react-router-dom'

const AboutUs = () => {
    return (
       <div style={{fontWeight:'100',fontSize:'16px'}}>
            <div className="hero-wrapper">
                <img src={hero} alt="" />
                   <div className='contacts-title'>
                      <h1>About Us</h1>
                   </div>
            </div>
                <section className="section">
                <h3 style={{color:"#1261A0"}}>VISION</h3>
                <h6>Vision
A focus on achieving customer satisfaction through enhanced quality service delivery,
in a timely manner and with attention to detail.</h6>
<hr/>
        <h3 style={{color:"#1261A0"}}>Mission Statement</h3>
        <p>“Service Is Our Ernest Endeavour”</p>
        <hr/>
        <h3 style={{color:"#1261A0"}}>Core Values</h3>
        <div>
        <ul>
        <li>A focus on achieving customer satisfaction through enhanced quality service delivery,
and with attention to detail.</li>
<li>To be among the leading firms in the building and construction</li>
<li>Integrity</li>
<li>Professionalism</li>
<li>Timeliness</li>
<li></li>Partnerships
        </ul>
        </div>
                 </section>
            <div className="row">
            <div className="sett">  
              <div className="col">
              
<div className="row">
    <div className="col s12 m7">
      <div className="card">
          <h2 style={{color:"#1261A0",textAlign:'center',margin:'0'}}>About Us</h2>
      <p style={{fontSize:'16px'}}>Shaft Co. Limited is a building, construction and equipment hiring private company. Our
business model focuses on client needs that drive service delivery with particular
attention to detail, quality and timeliness to ensure client satisfaction.</p>

        <p style={{fontSize:'16px'}}>We respond to client needs in the dynamic Kenyan construction environment. Shaft Co.
administrative offices are located in Rongo, Migori County.However, we serve clients
all over the country.</p>

<p style={{fontSize:'16px'}}>
Before inception, the Wintone Holdings was setup in 2014 initially concentrating on
real estate management and allied construction repairs, plastering and painting
buildings. Afterwards, the firm expanded to include building contract works. This led to
the inception of Shaft Co. Limited in 2020 to focus specifically on the building,
construction and equipment hiring needs. We collaborate with key stakeholders in the
constructionindustry to perfect the quality of services delivered.
</p>
        
      </div>
    </div>
  </div>
  </div>

              </div>
              <div className="sett">
              <div className="col s12">
              <div className="row" style={{height:"400px",width:'100%'}}>
              <img src={person} alt="" height="400px" width="100%" style={{objectFit:'cover'}}/>
              </div>
              </div>
              </div>
            </div>
            <div className="expectations">
                <h4 style={{color:"#1261A0"}}>What can you expect from working with Shaft Co. Limited?</h4>
                <ul>
                    <li><strong style={{color:"#1261A0"}}>The freedom to live your way</strong> – Design, colours, appliances and 
                        extras are all up to you; it’s your home after all!</li>
                   
                    <li><strong style={{color:"#1261A0"}}>Complete transparency</strong> – To give you peace of mind we provide 
                        you with a copy of all receipts and price supporting documents 
                        for the selections you have made in the Budgets and Allowances 
                        section of the contract. This allows you to see how your
                         money has been spent. We also 
                        provide you with our pricing so you know there is no double dipping
                         on the gap between trade and retail price.</li>
                    <li><strong style={{color:"#1261A0"}}>Site visits at times that suit you</strong> – We are happy to do regular onsite
                         meet ups during business hours. Call your site supervisor at any point
                          through the construction,
                         and we’ll organise to meet you onsite for a walk around and Q&A session.</li>
                    <li><strong style={{color:"#1261A0"}}>State of the art workmanship</strong> – With an eye for detail and a perfectionist nature
                         we use
                         high-quality materials, ensure high-quality finishes and are diligent 
                         in our workmanship.</li>
                    <li><strong style={{color:"#1261A0"}}>Open and regular communication</strong> – With regular building reports and updates you’ll never have to wonder about what is happening with your build. You’ll also have the opportunity 
                        to meet with our team who consult on all new progresses.</li>
                    <li><strong style={{color:"#1261A0"}}>No false promises or marketing ploys</strong> – You know the ones. The promises
                 of remarkable upgrades and extras that lure you in only for you to find out later
                  that it’s built into the price or not quite what you thought? There’s none of
                   that with us. Instead
                 we build the home you want, with the inclusions you want for a fair and reasonable price.</li>
                </ul>
                <a class="waves-effect waves-light btn" href="/kgk" style={{backgroundColor:"#ff5500"}}>
                    <Link to="/employees" style={{color:'white'}}>
                    Meet Our Team
                    </Link>
                    </a>
                <hr/>
            </div>
            <div className="note">
                <p>But don’t just take our word for it, take a peek inside some of the
                     projects we’ve built by viewing <Link to="/projects">our projects</Link> or
                     give us a call on 07 05000089 or 0786151760 to discuss the home you want to build.</p>
            </div>
       </div>
        
    )
}

export default AboutUs
