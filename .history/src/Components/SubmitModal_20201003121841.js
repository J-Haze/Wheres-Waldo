import React from "react";
import "../App.css";

function SubmitModal(props) {


    return (
        <div className="modal" onClick={() => { props.hideSubmitModal() }}>
            <div id="submit-modal" className="modal-content" onClick={(event) => { event.stopPropagation() }}>
                <span className="close" onClick={() => { props.hideSubmitModal() }}>&times;</span>
                <div> {props.location} </div>
                <div id="leaderboard-title">Time: {props.time}</div>
                <div id="submit-time"> Submit </div>
            </div>
        </div>
    )
}

export default SubmitModal;