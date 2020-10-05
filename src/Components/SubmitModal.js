import React from "react";
import "../App.css";

function SubmitModal(props) {

    let title
    if (props.location == "beach") {
        title = "Waldo at the Beach"
    } else if (props.location == "park") {
        title = "Waldo at the Fair"
    } else if (props.location == "store") {
        title = "Waldo goes Shopping"
    } else if (props.location == "castle") {
        title = "Renaissance Waldo"
    } else if (props.location == "gold") {
        title = "Waldo Strikes Gold"
    }

    return (
        <div className="modal">
            <div id="submit-modal" className="modal-content" onClick={(event) => { event.stopPropagation() }}>
                <span className="close" onClick={() => { props.hideSubmitModal() }}>&times;</span>
                <div id="submit-title"> {title} </div>
                <div id="time-title">Time: {props.time}</div>
                <input id="input" placeholder="Enter Name" value={props.playerName} onChange={(e) => props.setPlayerName(e.target.value)} />
                <div id="submit-time" onClick={() => { props.submitTime() }}> Submit Score</div>
            </div>
        </div>
    )
}

export default SubmitModal;