import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const AudioCard = (props) => {
    return (
        <div>
            <AudioPlayer
                // autoPlay
                src={props.audio}
                onPlay={e => console.log("onPlay")}
                // other props here
            />
        </div>
    )
}

export default AudioCard
