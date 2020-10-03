import React from "react";
import "../App.css";

function SubmitModal(props) {


    return (
        <div className="modal">
            <div id="submit-modal" className="modal-content" onClick={(event) => { event.stopPropagation() }}>
                <span className="close" onClick={() => { props.hideSubmitModal() }}>&times;</span>
                <div> {props.location} </div>
                <div id="time-title">Time: {props.time}</div>
                <input value={props.playerName} onChange={(e) => props.setPlayerName(e.target.value)} />
                <div id="submit-time" onClick={() => { props.submitTime() }}> Submit </div>
            </div>
        </div>
    )
}

export default SubmitModal;