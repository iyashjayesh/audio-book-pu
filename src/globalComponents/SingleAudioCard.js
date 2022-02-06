import {React, useState } from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Card} from 'react-bootstrap';
import Modal from '../pop-up/Modal';



const AudioCard = (props) => {

    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div>
            <Card className="audio-cardbox">
            <h1
                className="openModalBtn"
                onClick={() => {
                setModalOpen(true);
            }}
            >
                {props.sholkno}
            </h1>

            {modalOpen && <Modal sholkText={props.sholk} setOpenModal={setModalOpen} audio={props.audio}/>}
            </Card>
        </div>
    )
}

export default AudioCard
