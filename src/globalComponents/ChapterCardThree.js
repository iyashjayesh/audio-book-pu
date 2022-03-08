import React from 'react';
import { Card } from 'react-bootstrap';
import { Link }from 'react-router-dom';
import '../App.css';

const Chaptercard = (props) => {
    return (
        <div className="container center p-2">
                <Card className="cardbox3">
                    <Link to={props.path1}>
                        <h1>{props.text1}</h1>
                        {/* <Card.Img variant="top" src={props.img1} /> */}
                    </Link>
                </Card>
                <Card className="cardbox3">
                    <Link to={props.path2}>
                        <h1>{props.text2}</h1>
                        {/* <Card.Img variant="top" src={props.img2} /> */}
                    </Link>
                </Card>
                <Card className="cardbox3">
                    <Link to={props.path3}>
                        <h1>{props.text3}</h1>
                        {/* <Card.Img variant="top" src={props.img3} /> */}
                    </Link>
                </Card>
        </div>
    )
}

export default Chaptercard;