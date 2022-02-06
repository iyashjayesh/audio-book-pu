import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link }from 'react-router-dom';
import '../App.css';

const Chaptercard = (props) => {
    return (
        <div className="container center p-2">
                <Card className="cardbox">
                    <Link to={props.path1}>
                        <Card.Img variant="top" src={props.img1} />
                    </Link>
                </Card>
                <Card className="cardbox">
                    <Link to={props.path2}>
                        <Card.Img variant="top" src={props.img2} />
                    </Link>
                </Card>
        </div>
    )
}

export default Chaptercard;