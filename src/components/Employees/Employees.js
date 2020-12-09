import React from 'react'
import './Employees.css'
//import hero from '../../assets/cont.jpg'
import person1 from '../../assets/person1.jpeg'
import person2 from '../../assets/person2.jpeg'
import person3 from '../../assets/person3.jpeg'
import { Card, CardGroup} from 'react-bootstrap'

const Employees = () => {
    return (
        <div>
            <div className="hero-wrapper">
                <img src="https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                 alt="" />
                   <div className='contacts-title'>
                      <h1>The Team</h1>
                   </div>
            </div>
<div style={{textAlign:'center',color:"#1261A0"}}><h2>Meet Our Esteemed Team</h2></div>
            <CardGroup className="emp-card">
  <Card>
  <div className="card-image waves-effect waves-block waves-light pict1">
      <img className="activator" src={person1} alt=""/>
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4" style={{color:"#1261A0"}}>MARK NGAO<i className="material-icons right">more_vert</i></span>
      <p style={{color:"#1261A0"}}>Site Engineer</p>
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4" style={{color:"#1261A0"}}><strong style={{color:"#1261A0"}}>About Mark</strong><i className="material-icons right">close</i></span>
      <p style={{fontSize:'15px'}}>Mark Ngao is a professional Civil Engineer with a vast experience in the construction field, having worked with many construction companies and having taken a lot of projects.
      </p>
      <h5><strong style={{color:"#1261A0"}}>Experience</strong></h5>
      <p style={{fontSize:'15px',marginBottom:'0'}}>July2020 to date:- Shaft Co. Limited</p>
      <p style={{fontSize:'13px',paddingLeft:"40px"}}>POSITION: Site Engineer</p>
      <p style={{fontSize:'15px',marginBottom:'0'}}>July 2018-March 2020:- Edon Consultants</p>
      <p style={{fontSize:'13px',paddingLeft:"40px"}}>POSITION: Asistant Structural Engineer</p>
      <p style={{fontSize:'15px',marginBottom:'0'}}>September 2016 - 2017:- KURA</p>
      <p style={{fontSize:'13px',paddingLeft:"40px"}}>POSITION: Industrial Attache</p>
    </div>
  </Card>
  <Card>
  <div className="card-image waves-effect waves-block waves-light pict2">
      <img className="activator" src={person2} alt=""/>
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4" style={{color:"#1261A0"}}>ESCOPH OKETCH<i className="material-icons right">more_vert</i></span>
      <p style={{color:"#1261A0"}}>Safety Officer</p>
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4" style={{color:"#1261A0"}}><strong style={{color:"#1261A0"}}>About Escoph</strong><i className="material-icons right">close</i></span>
      <p style={{fontSize:'15px'}}>Escoph Oketch is a certified Environmental health officer who has built a good portfolio over time. He has worked with both government and 
        private agencies making his expecience much greater.
      </p>
      <h5><strong style={{color:"#1261A0"}}>Experience</strong></h5>
      <p style={{fontSize:'15px',marginBottom:'0'}}>October 2019 to date:-Shaft Co. Limited</p>
      <p style={{fontSize:'13px',paddingLeft:"40px"}}>POSITION: Safety Officer</p>
      <p style={{fontSize:'15px',marginBottom:'0'}}>August 2017 - September 2019:- World Vision</p>
      <p style={{fontSize:'13px',paddingLeft:"40px"}}>POSITION: Field Officer</p>
      <p style={{fontSize:'15px',marginBottom:'0'}}>July 2016 - September 2016:- KEMRI</p>
      <p style={{fontSize:'13px',paddingLeft:"40px"}}>POSITION: Research Assistant</p>
      <p style={{fontSize:'15px',marginBottom:'0'}}>April 2016 - June 2019:- World Vision</p>
      <p style={{fontSize:'13px',paddingLeft:"40px"}}>POSITION: Research Assistant</p>
      <p style={{fontSize:'15px',marginBottom:'0'}}>May 2015 - Aug 2015:- Homa Bay County</p>
      <p style={{fontSize:'13px',paddingLeft:"40px"}}>POSITION: Industrial Attache</p>
    </div>
  </Card>
  <Card>
    <div className="card-image waves-effect waves-block waves-light pict3">
      <img className="activator" src={person3} alt=""/>
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4" style={{color:"#1261A0"}}>SIMON OCHIENG ODHIAMBO<i className="material-icons right">more_vert</i></span>
      <p style={{color:"#1261A0"}}>Supervisor</p>
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4" ><strong style={{color:"#1261A0"}}>About Simon</strong><i className="material-icons right">close</i></span>
      <p style={{fontSize:'15px'}}>Simon Ochieng, A professional Engineer who has a vast experience in the construction works. He has international exposure having attained his first degree in an Internatinal University
      </p>
      <h5><strong style={{color:"#1261A0"}}>Experience</strong></h5>
      <p style={{fontSize:'15px',marginBottom:'0'}}>April 2010-November 2013:- Lido Beach Hotel</p>
      <p style={{fontSize:'13px',paddingLeft:"40px"}}>POSITION: Interior Fasard</p>
      <p style={{fontSize:'15px',marginBottom:'0'}}>2013-2015:- Kileleshwa Towers</p>
      <p style={{fontSize:'13px',paddingLeft:"40px"}}>POSITION: Site Manager</p>
      <p style={{fontSize:'15px',marginBottom:'0'}}>November 2015 -September 2018:- Wintorn</p>
      <p style={{fontSize:'13px',paddingLeft:"40px"}}>POSITION: Supervisor</p>
      <p style={{fontSize:'15px',marginBottom:'0'}}>September 2018 - 2019:- Tuff Concrete</p>
      <p style={{fontSize:'13px',paddingLeft:"40px"}}>POSITION: Plant Operator/ Supervisor</p>
    </div>
  </Card>
</CardGroup>
            
        </div>
    )
}

export default Employees
