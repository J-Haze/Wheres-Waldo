import React from "react";
import "../App.css";

function SubmitModal(props) {


    return (
        <div className="modal">
            <div id="submit-modal" className="modal-content" onClick={(event) => { event.stopPropagation() }}>
                <span className="close" onClick={() => { props.hideSubmitModal() }}>&times;</span>
                <div> {props.location} </div>
                <div id="time-title">Time: {props.time}</div>
                <div id="submit-time" onClick={() => { props.submitTime() }}> Submit </div>
            </div>
        </div>
    )
}

export default SubmitModal;