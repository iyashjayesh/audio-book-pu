import React from "react";
import "./Modal.css";
import AudioPlayer from 'react-h5-audio-player';

function Modal(props) {
  console.log(props.sholkText);
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              props.setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>{props.sholkText}</h1>
        </div>
        <div className="body">
                
                <AudioPlayer
                    // autoPlay
                    src={props.audio}
                    onPlay={e => console.log("onPlay")}
                    onClickNext={e => console.log("onClickNext")}
                    onClickPrev={e => console.log("onClickPrev")}
                    // other props here
                />
        </div>
        <div className="footer">
          <button
            onClick={() => {
              props.setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;