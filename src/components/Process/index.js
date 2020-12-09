import React from 'react'
import './Process.css'
//import hero from '../../assets/cont.jpg'
import { CardDeck,Card} from 'react-bootstrap'

const Process = () => {
    return (
        <div>
            <div className="hero-wrapper">
                <img 
                src="https://images.unsplash.com/photo-1521239248915-738394a81876?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" 
                alt="" />
                   <div className='contacts-title'>
                      <h1 style={{color:'#ff5500'}}>Process</h1>
                   </div>
            </div>
            <div className="intro">
                <p>At Shaft Co. Limited we believe our services should be
                   cleint based. We always try to tailor our services to suit the client description.</p>
                     <p>Working collaboratively with you, our highly experienced draftsmen, 
                         builders, environmental officers, and interior designers work alongside 
                         you to make sure you have the design you want for the block you 
                         have and lifestyle you desire.</p>
            </div>
            <div style={{margin:'30px 4%'}}>
                <h5 style={{color:"#1261A0"}}>So how do we do it? Here is the process we go through to build a home
                     to suit your needs, lifestyle, block and budget.</h5>
            <CardDeck>
  <Card className="acard">
    <Card.Body>
      <Card.Title>Step 1 – Initial meeting onsite</Card.Title>
      <Card.Text>
      Here we discuss your lifestyle, ideas, budget and goals and answer any questions
       you have. We explain our philosophy and what we can do to achieve your goals. We do this meeting onsite to get a greater understanding 
      and appreciation for the land and discuss any aspects of the land that will impact design.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="acard">
    <Card.Body>
      <Card.Title>Step 2 – Brief our draftsman</Card.Title>
      <Card.Text>
      We take the results of our initial meeting and brief our draftsman.
       At this time you’ll receive a services agreement and a plan drawing deposit.
        When returned, the draftsman will make a time to meet up and discuss the design 
        points in finer detail with you. The draftsman can also meet
       with you along the design journey to discuss the plans and make sure you
        are on track to getting the home you want.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="acard">
    <Card.Body>
      <Card.Title>Step 3 – Preliminary plans complete</Card.Title>
      <Card.Text>
      Our designer will then produce the first set of preliminary plans generally within 
      a week for review. Once reviewed any requested amendments will be made and the plans
       will be sent back for further review. At this time we
       will also offer price guidance on what we expect the building costs 
       will be before proceeding.
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
<CardDeck>
  <Card className="acard">
    <Card.Body>
      <Card.Title>Step 4 – Plan approval</Card.Title>
      <Card.Text>
      When you have approved the plans, we begin working on the complete set of
       working drawings. 
      We also book a soil test and lodge the structural and foundation engineering.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="acard">
    <Card.Body>
      <Card.Title>Step 5 – Fixed price quote</Card.Title>
      <Card.Text>
      We send the working drawings to you for review 
      and then compile a fixed price quote (please note this can take up to three weeks).
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="acard">
    <Card.Body>
      <Card.Title>Step 6 – Quote approved</Card.Title>
      <Card.Text>
      When you have approved the quote, we sign the Master Builders contract,
       issue a deposit invoice, lodge with the council and start construction!
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
            </div>
        <div className="wants">

        <hr />
        </div>
        <div style={{width:'100%',margin:'0 4%',marginBottom:'50px',fontSize:'18px',color:"#ff5500",textAlign:'center'}}>
        <p>Find out just how exciting and profitable choosing Shaft Co. Limited can be.</p>
        <p>Call us today on 07 05000089 or  07 86151760 or email shaft.ltd.inc@gmail.com</p>
        </div> 
        </div>
    )
}

export default Process
