import React from 'react'
import {Carousel } from "react-bootstrap"
import Image from "../asserts/image1.jpg"
import Image1 from "../asserts/image2.jpg"
import Image2 from "../asserts/image3.jpg"

const Carousele = () => {
    return (
        <div>
        <Carousel>
  <Carousel.Item>
      <div  style={{ height: "50vh",  width :"100vw", display :"flex", justifyContent :"center", alignItems :"center"}}>
      <img
      className="d-block w-100 center"
      src={Image}
      alt="First slide"     
    />
      </div>
   
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <div  style={{ height: "50vh",  width :"100vw", display :"flex", justifyContent :"center", alignItems :"center"}}>
      <img
      className="d-block w-100 center"
      src={Image1}
      alt="First slide"     
    />
      </div>

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <div  style={{ height: "50vh",  width :"100vw", display :"flex", justifyContent :"center", alignItems :"center"}}>
      <img
      className="d-block w-100 center"
      src={Image2}
      alt="First slide"     
    />
      </div>

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            
        </div>
    )
}

export default Carousele
