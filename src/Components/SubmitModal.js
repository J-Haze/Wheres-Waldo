import React from "react";
import "../App.css";

function SubmitModal(props) {

    let title
    if (props.location == "beach") {
        title = "Waldo at the Beach"
    } else {
        title = "Waldo at the Amusement Park"
    }

    return (
        <div className="modal">
            <div id="submit-modal" className="modal-content" onClick={(event) => { event.stopPropagation() }}>
                <span className="close" onClick={() => { props.hideSubmitModal() }}>&times;</span>
                <div> {title} </div>
                <div id="time-title">Time: {props.time}</div>
                <input value={props.playerName} onChange={(e) => props.setPlayerName(e.target.value)} />
                <div id="submit-time" onClick={() => { props.submitTime() }}> Submit </div>
            </div>
        </div>
    )
}

export default SubmitModal;