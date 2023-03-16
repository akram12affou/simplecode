import React, {useState} from 'react'
import '../Services/Services.scss'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import service from '../Services/services.jpg'
import img3 from './img3.jpg'
function Services() {
   const [index , setIndex] = useState(2)
   const handleSelect = () => {
    setIndex()
   }
  return (
    <div className='services-container'>
            <div >
        <div className='services-top-bar'>
            <h2>
                Services
            </h2>
        </div>
        <div className='carousel-container'>
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className='carousel-container-content'>   <img
        
          src={service}
          alt="First slide"
        />
        <div>Service1</div></div>
     
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <div className='carousel-container-content'>    <img
        
         src={service}
          alt="Second slide"
        />
        <div>Service2</div>
</div>
    
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <div className='carousel-container-content'>  <img
       
         src={service}
          alt="Third slide"
        />
        <div>Service3</div>
</div>
      
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
        </div>
    </div>
    </div>
      
 
  )
}

export default Services