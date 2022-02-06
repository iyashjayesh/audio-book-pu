import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Card} from 'react-bootstrap';

const AudioCard = (props) => {
    return (
        <div>
            <Card className="audio-cardbox">
                <h1 >{props.sholkno}</h1> 
                <br/>
                <h5 >{props.sholk}</h5> 
                <br/>
                <AudioPlayer
                    // autoPlay
                    src={props.audio}
                    onPlay={e => console.log("onPlay")}
                    onClickNext={e => console.log("onClickNext")}
                    onClickPrev={e => console.log("onClickPrev")}
                    // other props here
                />
            </Card>
            <Card className="audio-cardbox">
                <h1 >{props.sholkno1}</h1> 
                <br/>
                <h5 >{props.sholk1}</h5> 
                <br/>
                <AudioPlayer
                    // autoPlay
                    src={props.audio}
                    onPlay={e => console.log("onPlay")}
                    onClickNext={e => console.log("onClickNext")}
                    onClickPrev={e => console.log("onClickPrev")}
                    // other props here
                />
            </Card>
            <Card className="audio-cardbox">
                <h1 >{props.sholkno2}</h1> 
                <br/>
                <h5 >{props.sholk2}</h5> 
                <br/>
                <AudioPlayer
                    // autoPlay
                    src={props.audio}
                    onPlay={e => console.log("onPlay")}
                    onClickNext={e => console.log("onClickNext")}
                    onClickPrev={e => console.log("onClickPrev")}
                    // other props here
                />
            </Card>
        </div>
    )
}

export default AudioCard
