import React from 'react'
import { Carousel } from "react-bootstrap";
import s1 from '../assests/Silder/s1.jpg'
import s2 from '../assests/Silder/s2.jpg'

function Carsousel() {
    return (
        <div>
           <Carousel>
                <Carousel.Item interval={1200}>
                    <img
                    className="d-block w-100"
                    src={s1}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1600}>
                    <img
                    className="d-block w-100"
                    src={s2}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100"
                    src={s1}
                    alt="Third slide"
                    />
                </Carousel.Item>
                </Carousel> 
        </div>
    )
}

export default Carsousel
