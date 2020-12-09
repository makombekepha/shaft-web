import React from 'react'
import './Home.css'
import hero from '../../assets/ex4.jpg'
import butere from '../../assets/butere.jpg'
import butere2 from '../../assets/butere2.jpeg'
import hero2 from '../../assets/brochure-download-im5.png'
import {Button,CardDeck,Card} from 'react-bootstrap'
import Carousol from './Carousol'
import {Link} from 'react-router-dom'


const Home = () => {
  

    return (
        <div>
          <div style={{top:'80px'}}>
           <Carousol />
          </div>



       <div className="midd">
         <h1 style={{color:'#1261A0'}}>Welcome to Shaft Company Limited</h1>
         <h5>Attention to Detail. Attention to Quality. Attention to Timeliness</h5>
       </div>
       <div className="home-hero-wrapper">
            <div className="home-hero-a">
            <h2 style={{color:'#1261A0'}}>OUR SERVICES</h2>
            <p>At Shaft Company Limited, we over a variety of services like construction of multi-level residential buildings , office and mixed use buildings, repairs and maintenance, interior design and installation, equipment hire,excavator works,site preparation dumping, building materials delivery, road murruming and butimen standardization</p>
           <p>Our services are client based and we always ensure that clients needs are perfectly met. Attention to detail, quality and timeliness is what put us ahead of other companies in the construction field.</p>
           <p>Following the good services, we have received numerous appreciations from our clients who continue living in confort because of the best services we offer.</p>
           <p>Shaft Company limmited abides by the standards and work within the Kenyan laws. The company is NCA approved and we also abide by other numerous laws required of us.</p>
           <Button variant="primary" size="lg" style={{backgroundColor:'#ff5500'}}>
             <Link to="/services" style={{color:'white'}}>
             Our Services
             </Link>
            </Button>
           </div>
            <div className="home-hero-b">
              <img src={hero} alt=""/>
            </div>
       </div>
       <div className="gener">

       <div className="proj">
       <CardDeck>
               <Card className="home-card-a" style={{padding:'35px 0'}}>
               <Card.Body style={{padding:'0 10%'}}>
                     <h4 style={{color:'#1261A0'}}>ABOUT</h4>
                     <div style={{margin:'25px 0'}}>
                     Shaft Co. Limited business model focuses on client needs that drive service delivery with particular attention to details, quality and timeliness. We are located in Rongo, Migori County but we serve all parts of Kenya
                     </div>
                     <Button variant="primary" style={{backgroundColor:'#ff5500'}}>
                       <Link to="/aboutus" style={{color:'#fff'}}>
                        About Shaft
                       </Link>
                      </Button>
               </Card.Body>
               </Card>
               <Card className="home-card-b">
                   <Card.Img variant="top" 
                   src="https://images.unsplash.com/photo-1597974385058-66a931a50a7a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" 
                   className="proje"/>
               </Card>
       </CardDeck>
      </div>
      <div className="proj">
       <CardDeck>
                <Card className="home-card-a">
                   <Card.Img variant="top" 
                   src="https://leafe.com.au/wp-content/uploads/2020/08/christina-custom-home.jpg" 
                   className="proje"/>
                </Card>
                <Card className="home-card-b" >
                <Card.Body style={{padding:'0 10%',paddingBottom:'10px'}}>
                     <h4 style={{color:'#1261A0'}}>PROCESS</h4>
                     <div style={{margin:'25px 0'}}>
                       At Shaft Co. Limited, we office a robust way in which the clients define what they want. We are to pay attention to details and ensure that the best quality of services are delivered.
                     </div>
                     <Button variant="primary" style={{backgroundColor:'#ff5500'}}>
                     <Link to="/process" style={{color:'#fff'}}> 
                       View the process
                       </Link>
                       </Button>
               </Card.Body>
                </Card>
       </CardDeck>
      </div>
      <div className="proj">
       <CardDeck>
       <Card className="home-card-a" style={{padding:'35px 0'}}>
               <Card.Body style={{padding:'0 10%'}}>
                     <h4 style={{color:'#1261A0'}}>PROJECTS</h4>
                     <div style={{margin:'25px 0'}}>
                       Shaft Co. Limited has successfully completed several projects with a lot of proficiency. The results are a testimony that quality is not just what we want to give but it is what we have done shall continue doing. some of our projects include and not limited to; Construction of Grand Riverside Building, Elsie Ridge building, Grand Royal Swiss Hotel and Butere Road works.
                     </div>
                     <Button variant="primary" style={{backgroundColor:'#ff5500'}}>
                     <Link to="/projects" style={{color:'#fff'}}> 
                       Our Projects
                       </Link>
                       </Button>
               </Card.Body>
              </Card>
              <Card className="home-card-b" >
                 <Card.Img variant="top" 
                 src="https://images.unsplash.com/photo-1588985719185-4b612a405cd1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTIyfHxyb2FkJTIwY29uc3RydWN0aW9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                 className="proje"/>
              </Card>
       </CardDeck>
       </div>
       </div>

       <div className="client-views">
         <h4 style={{color:'#1261A0'}}>What Drives Us</h4>
         <p style={{textAlign:'center'}}>
         "As an architect, you design for the Present with awareness of the past, for the future which is essentially unknown..."
         </p>
       </div>
       <div className="home-projects">
          <h3 style={{color:'#1261A0'}}> Sample Projects</h3>
         
       </div>

{/*projects*/}
       <div className="home-projects-body">
       <div className="prj">
            <CardDeck>
  <Card >
    <Card.Img variant="top" 
    src="http://www.elsieridge.co.ke/elsie/wp-content/uploads/2015/03/elsie-ext-ent.jpg"
     className="proje" />
    <Card.Body>
      <Card.Text style={{color:'#1261A0'}}>
      Elsie Ridge Building
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" 
    src="http://www.elsieridge.co.ke/elsie/wp-content/uploads/2015/03/elsie-daylight-view-1024x768.jpg"
     className="proje"/>
    <Card.Body>
      <Card.Text style={{color:'#1261A0'}}>
        Elsie Ridge Building
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" 
    src="http://www.elsieridge.co.ke/elsie/wp-content/uploads/2015/03/elsie-ext-5-1024x768.jpg" 
    className="proje"/>
    <Card.Body>
      <Card.Text style={{color:'#1261A0'}}>
      Elsie Ridge Building
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
            </div>
            <div className="prj">
            <CardDeck>
  <Card>
    <Card.Img variant="top" src={hero} className="proje"/>
    <Card.Body>
      <Card.Text style={{color:'#1261A0'}}>
        Grand Riverside Building 
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" 
    src="https://www.grandriverside.co.ke/images/main2.jpg"
     className="proje"/>
    <Card.Body>
      <Card.Text style={{color:'#1261A0'}}>
      Grand Riverside Building
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" 
    src="https://www.grandriverside.co.ke/images/main4.jpg"
     className="proje"/>
    <Card.Body>
      <Card.Text style={{color:'#1261A0'}}>
      Grand Riverside Building
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
            </div>
            <div className="prj">
            <CardDeck>
  <Card>
    <Card.Img variant="top" 
    src="https://media-cdn.tripadvisor.com/media/photo-w/10/fc/ad/6d/grand-royal-swiss-hotel.jpg"
     className="proje"/>
    <Card.Body>
      <Card.Text style={{color:'#1261A0'}}>
        Grand Royal Swiss Hotel 
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" 
    src="https://media-cdn.tripadvisor.com/media/photo-w/10/fc/ab/8c/the-lobby.jpg"
     className="proje"/>
    <Card.Body>
      <Card.Text style={{color:'#1261A0'}}>
      Grand Royal Swiss Hotel 
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" 
    src="https://media-cdn.tripadvisor.com/media/photo-w/10/fc/ad/12/aquarius-pool.jpg"
     className="proje"/>
    <Card.Body>
      <Card.Text style={{color:'#1261A0'}}>
      Grand Royal Swiss Hotel  
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
            </div>
            <div className="prj">
            <CardDeck>
  <Card>
    <Card.Img variant="top" src={butere} className="proje"/>
    <Card.Body>
      <Card.Text style={{color:'#1261A0'}}>
        Road Works Butere-Kakamega
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" 
    src={butere2}
     className="proje"/>
    <Card.Body>
      <Card.Text style={{color:'#1261A0'}}>
      Road Works Butere-Kakamega
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" 
    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhMWFRUXFx0YGBgXFxceGxgaGBoYFxYYGBYYHSggGBolGxcaITEhJSktLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGy8lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAK4BIQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwEEBQYAB//EAEAQAAECBAQDBQYFAgUDBQAAAAECEQADITEEEkFRBWFxEyKBkaEGMkKx0fAUUsHh8WJyFSNTkqKC0uIWM0OTsv/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACwRAAICAQMEAgEBCQAAAAAAAAABAhEhAxIxBBNRYSJBcfAFFDKBkaGxwdH/2gAMAwEAAhEDEQA/APs5AeohMxIeFqnvAZo0SZGCykU0hjAiohMpYhwaE7QCVyToaQacOnUPBxJg3sNqKisLWloVMlEReBiFVi1qv7Iemii0SBFpUmB7MRfcRHbYoLIghNMeywSQHgbQJMZLmUiM0I4jOMuWpaQCRVuWsMkzM4ceXWo8GjG1ZtTqwVJeghE/EypfvzZaP7lpHzMZ/tPITPR+HchalUyhRAKUlYCiAwcBmJF4+EY3i89Cc4kJSgmimfVql6Fw1Yc5zWIocdODzJn3ed7VYNDn8ShXJDq//IMZyvb/AA5YBM0klmytyuojY1j4xM40lQbtFkHRKQn1yvAYfihBKiZpyjMCpRYMQ1AWP7RCc+XRVafCTPr+I9tjUIkO35lgP0ABfzjpOEcdlTwOzUOe12IexL6Xj4Tx+UsY0rSDldJzAGmlTpHQcEnJRjpKT2qBM7MqzZRmUojKo0L/ADppBpylOn6HOEI2uMn2w9Y8IlUoiAEUZDAHgVSnj2eIKxArQ6TFqRBIAgisQKjD3NiUUHmgQrxgIlMTVFWEpTxKUDrC1NAQUMYvnEFUAqIAh0ImPZ483OPM0FoAFc4gwSjAvBYURHo88RBYyGgkiCKecSgsY23GG0Z2fnBgEaxGaIB5xluZpSGpVBFQhWaIiaHYYIiXaIColS4QyRNgCXiCYkEbQ1gGGEx4mBzR7OYAAXJCgUmxDecZ3AFunKfeQChX/Sru+hMawMYUmZ2eMmodKRNQmYCoUJBykAuKkmIbe5MuK+LRyvHMbOTxyTJTMWmTSYoA0OWStaqdJYeMnins6nseIS3OaVNmFIowBacj0MfUjw6RMWJxlI7XKUZykFQFUqAVpcjpHFcbxHYYhapiVqTiZCHyJKj2iAqWtwOQHlFymZzi3H48o472L4Phl4tQmSkrCkqKQqoq0xJ2fKfWOs9qOIYbh/YZcKk9rMy5kJSMjMXNO901AMcPwriZlzUKkpVMmAMEgAOUpyNU0oA7wv2m4jiMQ8nEdqlUsgjKtNQp3Iyhnoz30o9ct6umLszk7+jvMVNC8DiymzqUBy7ihGNL9n1YrFYNSFpRkloUSQSf8urAOLgNFH/FyiRPkpOYLcqdnKfcXlOahfkY6P2HUsYmUSoFPZumjMkhgn+ovrGehOnj9ZN56bVt/b/0fSZhJgX3giYBRjdMzokmIpAvEPFEkmJBgXiCYBoMqEC8DEEwDDK4EqgSYEmChEvEZoHNFabj5SSypiR4iCw5LeaIJin/AIlJZ+0R/uEV5vHJA+MHo8Lch0zTJgCYxD7Tyq0V5D6xUxPtSa5ZCm0UdfACJepHyUtOXg6TtBuI9HFf+ppn+n6GPRPeiX2pHeKvBCMMcfStbIytXvFVBFuVxeSLzQSLmw8I23GO2jSIjwTGTP8AaKQksFZjyH6wqZ7USRZz5fN4B0zdAEFmjAke0KVaU5Xi+ji8k/GB1hCo0I9GZO49h03mp8C/yiiv2wwoLZj5QrGos6F4gRmYLjcmb7iiWuWoPHeLisUkawwK/GeIqkIzpl5xV6s3kDe0AjiS+2bKkyWotJBLskh2J3IZtIo+0+LeQybFQCrVDH9RHM/j5jMFKAswJbw2ji6jq+29qR1aPT71bO6x3FpUpOZZYfdhqeUcvxjjuEIVOI7QpDjuKVlCfBg145biM1Sld5RLCjkluj843Z2ITNky5XwBCVTT0FEHyc+EcWr1M5pXwdWnoRj+TJ9pfaZSXmpnT0hTJSxKAhyCFBlVJBLki/ph8b9qlS5GaXOVNKQe9NKgXVMQQwKQJhDqNAKV5xpYVEmeZomdxGUiWQHIIbIwP/U45mOcxeCyEZ5joBBJGocfEKt3vlGq1WlHdwT20265Kns7xlyqcojukvMAYHOVZnSBex8bxpcM9rQV9ktaVomEqlkpJYuaHMkMC1ABGXxfhQBaUZqE1zJSVsSmqjzJBHXSK3DuGpC+0mEJMsshCn7xIcFzcAKL84G9Ody9Y/X5BRlFKJo+2eJK0yZjs81KWAYMx2+6R0vBJqjkdTDsmHkf1jjsRgCqStGcFp4mJDOQS4IVVh7t+cdPwMrJQO6UoQQ6VO+9gzA86vGkKjBJezOScptv0fXPZkrOHQpczOClOUMBlAQAQ91OXLmNCbNSLkCOH9leINJXnWUhC2uWCcqTewDk6xdm8YlLcJmud6Fh0eNVrY4Mno5OqCxvAzJyRdQHUgRyCeKIT/WRY29KwuZx8f0k9H9TDfUPwJaHs62ZjEAPmBo9C9PCEL4klnCVK5BNfWOSne0dWHow+QgzxtYpU03u8L94l4KWhE6YcRUf/hWOpAflFdfE5oDmWAP7gT6GMJHtCbZIOZxpRFNYzlraj4KWlBcj1cdmABXayRLUWSomruGCU/F8WukTI4iqYooRic5vSW2UaO4p+sZSCAnKSVB37ylKqdsxMLxPEMgJSD3jZN1KbwcsNdozUtVv+Itwgvo08GO3Rn7WaU5lJZTJqlRSaVpSh1EZeNkoSrKElR3Yl96tGNwDHBfalKZsvKvIULWCQffJBToyxroI01v6xTbvI/iuC1hxKAOaWH0uadHilip6nZEug2S0SUl9OkMTKJhAXsLj2AJDcnH6Rl8b4k/8n6w0SjqGitMwyDcP1pCSrIWYv448vSIjX7JH5E+X7R6K3DKQnmtiLUNfK0aPDgFIIUqmgb6WjCZZN/SGTETa5VJT4N5sPpHX3DBwH4kGWqpJBsf0fp8oQnHUYnlFSdMmIQrtAoKbuEe6pQIyh/hJLe96xPYouauASeZqzaB4e8W0upxzDK56uX8oOWsEmpbYxiyzMeqaPcEV5kh38BFqdxOWhQSpTK2/loTkFF9UwCgPSFGel7Ak06fvGLO4sFKIQFEf0glubkNFXFKnFskol/Cjb3FeRgGfQ+G4hpQEuYlBFHLn0A/eMefPxalkLmHLuCa7ECMjhcrEuj/LICmu9NyXHzIjpE4LLWZMc8qD/c0RkHSG4KYpKcilEp53Jah5Vizko79KRzX/AKkkCYmWjOp1hGZgzkgalyK3EdIpYzNQbD6R5nWpqSs7Ondoz8eGV4RlTeOpR2khU1CAahyAdKbkPG1xGWxB5aGOB9reGtLUsjvBZUD/AEqJV6ZvSFoRjJpP0VNtJtHYcIWlUydh1JAKMqk3cpWl8wI/qcRX9ocHNAljDp/zHKSonuoSQe+XOVLMLxzuM4xMmmXjJBCZksGXly++h6hSnruzC+4EWk+0KcT74OHAHeJWgjQt3wc1R8QJqY7XFL+X+TlTdiMfxZJIkS1jEYg6urskqAfIgmq6hg7A6xQxPshjpiStQSSdDNlu+guw6PHW8EweEUvtpMkLUk1XLUHCjW5UEuQTb6RsY/HKQkqUFJAsoTFKYm2dFmemvheK0aq0hak2nTPl2E4fiZUnFSlImImASyEgFyCspOVrghRducV/ZzGLw09BIY95LKBDOACSLk8jHaf4mVqXIQtYmABczs8puap7xFA4FrERyOLWuZiRPky5lAHzEGoGR3FgWeNe422n4M1p1TXkt8S46o4kh2DAAZqbvWmu3nG77NcRecEixSxqCCcomAuwJ+K8cfjOFYla1TCnMosaF9LHQMBrHQez8haJ8taxTKHNGzAKQQ4pr6QNx2UhpS3ZO6WSdYUpI68orTOKosKq15decLGKapcmtuuw6xyWdNFtg4jTT3kncfKMVM8FX8eEXsPiGVy1gsKGk0qYjt2j2OS3eFQYqdp9/wAwCNFGMG/31j03EMHKXA8W5xkzF933mINSGc8u84/WCGKKWqRtTweAKLWH7MKUpFCtirR8oCQaWLAekOn4hILk0G1X2YNFRKyRUD9fMXjxmAm5FNWY+VodsW0ejGpNPTXxDU6vFxc5Qb789owMRhh8cu5D5a10Yj9RFjDKNC4FKAl1DQAtTSCxUaYxJPxpvuG6A7wCzzinOx4SRmSS4uohuTDM5+UeTiCx7qR168zU/dIASLPanl5xML7dX5ZfkfrHoB0Vk4EgllDzf5UgpmDf4j4fxGycKP5MeJQNR4CNjJsy5mBChlIJFqPUeXrC53BkrbutV7qzHxJZvCNZWJSP3LRWncWAs3NoAyH/AIc4Zg3jAL4TJLZ0yy26QW9IpzuNgkBOZT0SAL0fU18IRPXMSrvZXaz1HIsS1h5QBRszVSkC7t+Vm8dorqx6fhCUk/mJPkNY53iUtR/9uf2RI0bR+hau40gMDKUEpExSpyk2XUE9Xv4xNlKJ1X4wZXdjskVpc2jjfbPjWWUUJWXXRSVioTrRgz2rHQcRxCkoCQpKAwpUkPUhnAfm8fL/AGsxalzilRScoABHnXY13jeETCTyUMAJsyajICopUkgbMXF6R9x7OoOu8fDeDgGcgKUpCcwzFBAUwPwvR+sfdcIpKpaVBXdahJDnS4oeojg/aUZScdvs6ujaSbZT4imgPOOE9t8XlMoE91QVmG/ut+sd/wAbmZJRWkBZSxCXvoz+PhHB+0ktM5cslMsMD3c670aodzfaMulg4SSmvJtqy3K4mVwrH4dKUoEoLY3UjM775z8hGtIx5SoCVwwEksFEIAevxZWahq8ZiFpQH7KUG1UVnXYnxrBSeP4h2lS0JJolSZbVqKLJpHZLTcs1/V/8MtySWf7Hc/icqR2yiheqZZWxAqyQzq/uAcxh8S4jLyvKUsVKloXndQAf3ZlRXUbRexONnJQkDKshAdS1kOoABTgAkl3jnsdilLWO1SksCxSXdxtdNWjWC2xOZ/KRzOIWqcoqHdzJc1LUJFT4ecaXB1TJVZbkN3qApAq2v6GKsoplrYhJIQmigSCT3iCB/d6Rp4PEMUuSVM7JYg3NiKdYqb+PouCz7IxM2epbrJl95mI7ihyDecPnzVhJCMhJDF6eRYn5ReVJUUlSpmSWPhoXH9RJu+x8on8HIcge8G0rWqR+0c7kjZRZW4aDlCVsCW08/NnrGqkKCqENq725besSMGB7uUmr8/OsNXgpigAQKnkw9b820jNu2VVBoIUQx1D20vF8P6coqSMGlFyM2t6cocl6Vvt42eAZsYVWZDHxG20Z0xBSSPSz/wAweDm5VNpZ+enjGhjJTh9RASZ2cC2sEDmD5gfIeoHhbSAUNNfvSPKUXa1NKeXpAAC5dBRzodjuXhg5/fOIlzAb0rq4D8lEB+tolEv/AKdQHf1hgTKWQQyi237H9otCYhnUO9vr1pGbOxaUgkKTS7lgHvVvSGpW9fJttIBFmbwjMQpBFC4DA9O9pCZqJqVOoO19vGjwCcQUWq1da15RbwnFFFLrGYHXUDct+sAFTtUfnH/1q/7YmLX+MS/yL8h9Y9BTGPxKizqLDdRhCZobMC43FfQRjY7iCprpyKUH+IUHryMLRIVTvEU90As51HgOcaGe01MZjyGY5XG1T/u18IoGdQs4ckD6vEy8AQonvF93Pk9B4bxYVKAHeID6XeDcNIryJigSpsityXe1vKCOZQKiS5qTYEe8STp489o8qalJZNWI+Alzs4DAU+UTOxKi4bUNlb/cTRhby1tBbA8kJHdzJT/SGJ6t4Xh2YA90Of6iKgVsKffhHpeGWqoG1TarXFNIu/gUhPeURyFPIxLGcz7VYlIUQZSlFgdSm1DfLHzrGLBWSAQ5sST847P2+UyxlKgkigFqXNaiOIUY7dPMbOTUw6IEdZwTG4hMhKjOaWHTLQw0o5LPStBdo5Mc6R0GLxQXLRKwomKygByltKs2pLmFq20kPSaTs0OIceLZO0II96hc9EinrFOTPnTKoJ/uKQANOja7QWA9kJ62UoVLUBc1OqrDzNo6TC+zpAAnTcrAAJQxo+ptypGLcIqkbrdLnBzasRIk0mqVPmbH3R5mmkZ2K46ov2YEsM1LirsDoHjpOK8KloS8ss35k1NW1Dmv7Ryn+FTCCQAAzjmSWATueUVp7ZZZGpuWEb3G+IJKiFKW+qEqpu4yh28YrcNmyitIKlAF3Ky7DKbEtz3jBxOLWo1Lcg7eRgETzRySBo8adu1Rkp07OhTwZWJefmKApZbuuRUhOo0ApyjpeF+zKx3lzlFRGqBSjBgSY5Lh3FJ7uksBsGbxvHXYDFzSKvvc/wAxz6rmsXg301Hk0VcCQgEmYovdhflr5R5GClJsG1uW8N4RJmTFmpLPvTzrFslywNq1jB2bjJKUhTJAc65T1u3KGAsWALbac7QlS2IDDV3LO3QW++sqRmI7xTXQbaEEWgoAwL2pRtachUGvrCZiXOv3s36Q+cgKYd6nKnjoYBhvvo+4+/CACJZqC1dGvG3hlhSaRhnY35DTTfzjS4fNY5fvxgBkY3DeR/fSKMoEAAudKtTo1BG7OQCGjKmYcijs1AxY+DfpAITra+rWAs51glIdu8qmgar6EtaAl1S2vJ/nfapg05vRjS/08YAAXg811rIqACxAfqPWtokjLcG16crtaCUonU0OgFW3YVH1g5e4rXl16NT1hgVphSz7flr8nP3yjxAD77v+h+6wwkczawp5gN5R4kOxNWcJN/8AY4pCATnV+ceX/lHo92a9/RMegHQvEYZI95Vbm5NXazCJ7VIqKjmCSCS1AKG+vK8LWsWVlDmgLBRpmLpd6bw2RglKIUEivxEEEDQVuK2iySrJwyApSwDnJ95RJZydzSm242izKQojdk8ierEmNFOEAfMXGrMPJmPhBTMSE+4lyOnqbiBtskrJwSie8rKMtPzeTMIcqbJl1YqJo5cknkP1pCl4o6PfYt8orhL1P7esIdFybi1lmp1+lorrmmjl+rePhEJTvHkrBDpatOd+YpY32hDKXFcOJqFIWkK5PY6Fx7scfI9jZ6l5XTQgFgqj8yAH5O8fQwhKgxDDZyHNdSzxoIkKCs61Fnep3YE0Lvzi46jhwTKClycdwz2GkpbtAqYqtyyXBYBh+rx0eE4ehAbKhKAGAHNiXDMenWG4viKZd1DkSwqaM/3aM6fjM5IWcqTVLMQRuPLwiXKUuSlFR4HzeKIQCiWEgCgIsNDRhytv55xmZ0u4XzLgc6tzh6VEjuh9S+zuQbkDxgFoZIzM1XGX6n5iFRQv8OknMQDatCB0prvyEDjVh2ZRDE2ZjfW9GPjCmJSalIKWZRWCA4oz3cbDkYfKw5VlKUFIdic7AgZq5Gu5u4+tUKzNn+z6MQolT/3Vvc61U7vTSDk+yUjNlShzqST4kDk4jopeFALiijTwF2FgekXpEvKGHid/pB3JeSdkfBmYT2akoZh4w+dh5csUAFdSxfau8X50zKP4fyJigpVXJpe36xFlUVxMUxJDE0CXDDnQQzDpo56Wr5R6axId6u7V/ep8IlegF3tmqWo+V6tT7aGMJAOjjqznwF+selqrYK2737GAKANEgXJbxdtTHlFRsX6aAA6mhJPSEBE5K9Mo5nTTuJNH01haqA1JGuhHIFNrXr+kGlRLVLXUC7kvR1B2HIQwk7E1+7wAJR4DWpNG8qgcobLWXJZmZvv6tCBMAHfUkjUlgAHtza0NSQPddyXJU6uR1pDoGbSFOAYRipVPr90gcDN+F3roKeH7xYmNCJMY3AII5Bm0vq7ViSokP9nwaLOJlC/dINN/MeEVRmpYUqwO++0AyEn4QpNLjXfTpEKkm71ZwAotypbxaJX/AAKeTkOR4xEg8gDqRV9620MAEzZigAMhVuSQG9HgEqlqokFTe9drUGZQvDlpr3lEOQzgV0FX6W2gs9KtTf500MOwRW7VX5P+Y+kei7kV+X0j0K0MkIlIcgCurV8SYifiySMo8r+bUilMU77vfnWvVoFLigAbawG8MkdPclz+sCAal7838tBEJSfAC8FmvkKcwLMWcHWnrX0gAISSWdgPvxhaZwKmSM4DOoUDnQb7mIVMUAxZSlCgDOLh+Q5xZTh1EMFMprqFgdhTalYAIEtRcVvlCQ1bOS1R56wQQn3cwzAkM9QWqC1qV5+sCZYSAFd87r18N4Bc8JcIATzCRTcgc6dWgAZ+JKFgqypA6kl6ECg66xQ4zxKeoFMmWCFJoSoXfVJYgN49IXjJa7hlW7ytA4cDLWv28LRNlpU6lIFcpU5YFg6XSKFxrFR8ieSZClM0wAHYVJPJyzUswP6NlFwCQXBqkAME+BYvtXrWFYfGpWVEHOxAzsACWD5dQO94tyhmRwUh6V18DTSE8FInDf5jhMtbpNUtVnNVJFh3ddmgZhejl6gUchqkVFDe0UMTMV3UBWXvvlJAKgkp1BcIc7F7RZ4bgislSu7LYs7Kd3dtRrfeHt+wsLD4DPcZUgu+aqnLlOUWTavoBGkueAQAH0Aa/rzhc5YByA9SxPOrVi1gcKRlUoqdgwUXpyBt0EJu+RUOwmHIqq9qaRaKm08f5pEE705hh5kxVxMyj0rrdh1MSAuZMd9gfFtyzNFczyAWvo7VLc3g0IVfMPlSr18N4V2aaqFVGrlz5D4fDUvDGew6fizJJvYO1DVusOA/KBUVVUFtSCL/ALxCFZA5OXVywbQDveHnrAqUS/dfRhp1f1L3gGFZgkuxZzmIYXuWegqXsd4hcsKBHeJYmuYOLmoAYHyLbQKgp0uruuSWCqkBkv3mAA5H0Ag3ZmTUku1hsVPr6+UMQtE0JVStbhBrr8NiAdf2hkssaEve160PJxWIClfPyrTXl92lQBHO2npQ0+sSUAlRUWUxSBbLc3PXQbUtDQoP7tNyGdrkAi0Cxrod6O2mgpXXygJMg/EVHbpQu4A8rCHyIsSlhJeu5opm1vGiC4cRloSBVqnw2i5gsQGIJtSvmGhUJjZ8vNQ9a+kUlpIcUHIq+2jRXuBCZqLkBz96wCM9aVXYjnTViRs3NgYVKKgWPeYe84c7ksKaUiypCSoOzwkTLvQ1IazfV+g6wxoJazodObuWJsRp5PApHXo1h410gEoylRCcuflVXNR3rTwhmejkMEki5qephDFufy/fnHob2ieXn/4xMA6KzaCp2H0gilKQSoizsKnZomZOV/YAC9if2NIDCJzNY6nYGtC48XHKGSDMC1FOXuAivvEtyb3f3iymSyR7yvhDMTShJJL0apJ3uYM+6SpIJNQC1TueUCcQctGTSjN4AlqaaG2kBIa8JkaySaklRKgAzAFq3Y+MIxGIQgHL5v8AU1itjJgDKJBY94uCa6A6Vr5bxn4pSJqiAr3av/cCrWhobGGlYyxNWQoucym8nDitaV0hmFmd05Qjd0l6EEAnKGJJFnOlxCeGYRKQ4ublgMwGpHR7QU3Dy1EgqWADoVAK1Zgzs/reHgMjlkqSwJPPvJJ5vfTk8DJLKdQCyXAA0GpIKnfTypEhbMKCWxBcEk0NHJDWD01jOSsjvFRqXckBhoBtteEMtLKVK74SnIaZtCNb0+dIjFdurJLlAF+8sqIHdokK72r8tecVjMqElCtSbAAM9ah7c+ekDhpGJMyYQUsqXkSFJZKQTcB6qb5xSj9kt+DRRJKqLOV3D6kEWFKP1o+tG0sKpyyXfZjRgHNfnGVhOEqSlKVzBMbUpL82qcx0d42OH4QJcOa1ZzpsNtGiXQxsmQkOokl6uQOVAwHX7EOy1B97S8eCzYt5efpA5joC3WEAOIWUhyzDep8BpFLMKKUTWgF35Nbq8TPUklyyEjmANHJJalb8oJSSCAqnVi/iLuzu+kAyupCnATbVtOQDEedhBZaiwAq2Vy9wXFjrClEq0BRarvaxehGnn4oxWNRLIBJ7xYBKSrNc+4lzWvlyh5A0py2YJzEnpRgSpR3ZhRia8jCk4kLFlh395LEM4c5aVuA7tWEDFlcxJMxSUJBBSZaJaXJyt3u8SCwHjE/iJaASUqGjAOD4B7nU1g20K7LiXAcAbF3rpU1JMBMUxfOWD0Au9qfFCpQchRADDu0tzrq0MmKAyhyXDnkzV5CoB5wigJ9ctW6ZdK7c48glqg1N2bwvEzRlusOzurKCXsAwF9IhClqLmXkQA2YqDqOpZNq6D0tAFgYaZm7zkBJZlOkMwAIBFd2O94sZyXUA+yaj/cQP0pEy6ChexoBWhOz+HOAXMZ+6otqA/QAAlT+AF6wAQkKIHaJCS9AFOkV0JAc+FIs4aYxqRtt00hQzFJILMHZRs3J/rbnEyZqLLQVKF/e8Mmn3tAI0wp7ffSBYvvyMJw83RjYA3IfZ9Wh7ePp5wCKq01ZvKsJmJLDTen3WL3eYpCmpVyGP3tFJbgs4HjeABLglgHPQ/TaAUCCXYMBd2YW8hDloBS+V9+mzRV7AA0F9iasLdIRSJ7v+p/xVHoVk/pPmPpHodjyNkpqygKX1Dnwgs4Y94q58xp5aNGZMwfezzM5ILhIVYc2IozUi3JmJY0Aeu3Wo15mCiCZijMFHyk2rcDVr31eEz5jFIBfMaJbSlfnv84p4zjUpEuoKlmmR2rqzVEACZ3uqmUAfvZRzAys48Yva0rfBO5XSNGTLExBJKQkKtnAV6KcDk/hCZaErANFBqOSw1JAsSS1eohQ4Yk5QorNGZ3DBixGthpo8PK2NSwZmatbNVgbVaE2lwNLyMlzCwz5WoAEpy2sCMxc+VIGZiElRzFNBv3gB18rRWnzxYBRYP3b0erg2pFZSyFWysdKl+m5hVY+A8VNzMnQt3lB8w5fvEFJzVDC46lmr8NK0e8T+HCiohJclu8qqQ5Aetz4HaLOHkpSzt3u8UpBJQijJLliouP1EWsCFIw3dsAr+pOY1NFZWBAGpo9I0OHhQCXL6lTAOXchtBWFSkKJ7qQkF7kuC1gDQ7uCxjTw+HLh6nfTRyB4D7tMmNEYeWokk2Gn6PcmLipiSKOP08YDtgkFKh3elR13+cHJObvBqUrZ94kAlKpYdT+2sU8fPUxGYvyFBZrVhy1IF1ZtW59BeKUvM+ag1DP8AMh9DpAkAhMhi66pAAASipbclRJcmkNKQKlIt4gV2sTtBGaHAsRZiHPOooHqwO3SFdmwdBKQ9crVJ0KWYnrDYIamtP0G3VyPT0iMQygzga2dgm5DMlIcs8HJlEVJty2YOTZ+lvmmdOItLUpIB90pBLW7qiKNevjAuRnpCkZVZFIWEksyizg1cudet4KYSUgFWdZZ8hAABNMzKDi9PnHpNRbKf6SQBRw3Q7GPT52VJKQ7MwL+FaOSWrygvwAwSqAEqIDWe9gaXIc8htAmSq7jK9AGcm5NbXHWFrxcvtAkH/MKcykVOUDmA1XubtyhyWcinhawJL6WOotzEKmFiJK0lbIQtIYFSyGBLCgzB3vow6xM7DAkqJUqtnoagAhI/aLCARs1y5r5VfblHsqqVbU1Avc2pTo+8MCVB1PVDncgXFy/28MmBrlydSSRaldIrsSQCMyVAuSzJbTK7nT1hk7+nKkG3pQWpCGFkTbukhi1S/P0uYhCgGJObVkudauGrtcx5E9gR2dXcr3v0fQfxHlkBySw3JsPkIAGYCY71IFWBDUej0e0X0CkZSVAAqRWlDcXDC7eOjRfkzVKAKgCdwYCSVpqPKwiJ0seUMmMNfsQAB28qG+8IDNWj4kqJBoe8SKcns72EAuSXURmIZ8oL+QLCsWcfLNkZQXpmTmA6BxWETUkDvFNBmJOgsTekMZV7VP8Apq/2qiYH8SP9SX5K+seh0w3GdN4mKZUKU5Zy+VifO1aco9hlFgyQDuQAOoBBJq9ekLOIU5BYZTlZNbmlTpbSLAIzBFi7AtydiXsMvrpFtVijNZyImYNRV3UhwBmmKLEAGoSznbnSHzJyUDs0+8T8PvHYu9m1LctIV+IzlkUGYpcirhnPzjyyAXyhk5s1symALO1nMLLwyvaLClFKBMABAIFVAtSlD3lE31EVlzAqyRvT5nfaE4cmaCSxTmbLlyjnQEvDEyClL5iwDkOWYXYQNLgSYZZIJJFXtdmN2DtVnhElZJKs6iQSCPdDpAdTlhW25Y7wecmWo5UlkdolKqpYFu9Srtb1gcHMMzK4SkAOQnMBf8pJBuNtYpKkJvI+XhQtXukpazqGYsWKgQHZ3qDcRYlTBLOQIWtZBJ7jg0YOsln0rZ4upw5RcuDbwpYML1840JODZIALFhWtBqxFjSM3PNFqIOFl5UsQ6/unLwiZhKSO8a3HSHS8ApIzZqkAvq4iZskkEAsXZ6/YibHQRAIBIbrpCikCiiw2P0iyjhx1X9mA4jhhLSQ9ahxy5wIKM/GKdkoIyqJDBwSQK2Zqc/3ChPIEW21LWCusGjCqKwGSBvmU5epLNSrU69IRjBMABdJYGhdi5ygnUkM4FL6RVioELBJapBbpX4jvagggUkqtS9AWsW3d/lEfgZhShQXlBUxIZyAnMxSUEMRoGixh5YWkmXQBRAzbkByQOlngaAqTJDrCwpThIACj3KvVrktTaAOKTKJK5rrJYITW9MqUgm1RfqYuSZN3NfiIDP7oa9mg1ySGAYCvkNGhWgpisi8oLFyz0DJB0Kno1tTWDmIUzsTmfKAzFtlW8PW8VMTPQZgQrOVGzKUlPde4BZXiIuYnCTD3TMsSSRqWUC4IqLnyh/kdMr4RIKlKCEpP/JXIqAv59YTKxSJi1S5cxKlpdx+Up7pYEVqSHfWHSMB2QZJ7tAHclzuTetXe8DhODSwtUz4iWNBdnU1qHe8FxFTLSNXYUahe7X/jbxgrBq5NN3rubAD7rF6RgCUlSSAQ4ryo9LdIR+ESQCQCHqGuRryibRVFVSkprMUWKgLObFmAs7Dzh03GoKT3k0IFCQ70D5QQ/wAzCpskKV2hSM7HIT8LOLAUpz1aEzpyUBLZnUaGl71foPMxWBUHOlqW1mo4s3R2IP20WZZTdSgw0TUk7vXdqRK0kKykBgHLHr5xM9DACjuA4+ukRY6FTlBJAfoNXLVLV5xYwLuXURtpBnBKRVw57z1J2YP1gDhmGYqJU1Tv9gQ7QUyypIjyiAb6WixIkBSaExJwZ1IMAqZWozAP6CM7FWZRKRtuxpGv2AfL09YXisCa96trCjbPCsKMTsh+X/kP+2PRf/AD8x8hERVjyf/Z"
     className="proje"/>
    <Card.Body>
      <Card.Text style={{color:'#1261A0'}}>
      Road Works Butere-Kakamega 
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
            </div>
       </div>

       {/*end projects*/}

       <div className="home-cont-rem">
         <h4 style={{color:'#ff5500'}}>Have a question about the building process or want to chat about your new home? Call us today on 07 05000089 or 07 86151760.
        </h4>
       </div>

       <div className="home-bronchure">
         <div className="home-bronchure-overlay">
           <div className="home-bronchure-a">
             <div>
             <Card style={{backgroundColor:'transparent'}}>
    <Card.Img variant="top" src={hero2}  alt=""/>
    <div style={{padding:'4px 4%'}}>
      <h4 style={{textAlign:'center', color:'#1261A0'}}>Request A Brochure</h4>
      <p>
      Find out what makes us different, more about
      our process and how we can build your home
      that reflects your dream vision.
      </p>
    </div>
  </Card>
             </div>
              
           </div>
           <div className="home-bronchure-b">
             <div className="home-form">
           <form className="col s12">
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
          <input id="last_name" type="text" className="validate"/>
          <label htmlFor="last_name">City</label>
        </div>
      </div>
     
      <div className="row">
        <div className="input-field col s12">
          <input id="last_name" type="text" className="validate"/>
          <label htmlFor="last_name">Phyical Address</label>
        </div>
      </div>
      <a className="waves-effect waves-light btn" href="#k" style={{backgroundColor:'#ff5500'}}>Send</a>
    </form></div>
           </div>
         </div>
       </div>
      </div>
    )
}

export default Home
