import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';  


const Carousol = () => {
    return (
        <OwlCarousel
        className="owl-theme"
        items="1"
        autoplay
        nav
        dots
        loop
        style={{
            paddingTop:'1px',
        }}
        >
          <div className="item" style={{paddingTop:'5px'}}>
              <img src="https://images.unsplash.com/photo-1602028617950-0ed35e50e460?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8Ul9GeW4tR3d0bHd8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              height="450px"
              alt=""/>
          </div>  
          <div className="item" style={{paddingTop:'5px'}}>
              <img 
              src="https://images.unsplash.com/photo-1503708928676-1cb796a0891e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80" 
              height="450px"
              alt=""/>
          </div>
          <div className="item" style={{paddingTop:'5px'}}>
          <img src="https://images.unsplash.com/photo-1604709177225-055f99402ea3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" 
              style={{objectFit:'cover'}}
              height="450px"
              alt=""/>
          </div>
          <div className="item" style={{paddingTop:'5px'}}>
          <img src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          height="450px"
              alt=""/>
          </div>  
          <div className="item" style={{paddingTop:'5px'}}>
          <img src="https://leafe.com.au/wp-content/uploads/2019/12/builder-designer-homes.jpg"
          height="450px"
              alt=""/>
          </div>
          <div className="item" style={{paddingTop:'5px'}}>
          <img src="https://leafe.com.au/wp-content/uploads/2020/07/linacre-modern-home-new.jpg"
             height="450px"
              alt=""/>
          </div>
        </OwlCarousel>
    )
}

export default Carousol
