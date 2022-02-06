import React from 'react'
import { Carousel } from "react-bootstrap";
import s1 from '../assests/book-ch-img/Audio-Book-PU/sutrasthana/1.png'

function Carsousel(props) {
    return (
        <div>
           <Carousel>
                <Carousel.Item interval={1200}>
                    <img
                    className="d-block w-100"
                    src={props.img}
                    />
                </Carousel.Item>
            </Carousel> 
        </div>
    )
}

export default Carsousel


