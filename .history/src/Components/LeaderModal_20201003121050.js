import React from "react";
import "../App.css";

function LeaderModal(props) {


    return (
        <div className="modal" onClick={() => { props.hideLeaderModal() }}>
            <div id="leaderModal" className="modal-content" onClick={(event) => { event.stopPropagation() }}>
                <span className="close" onClick={() => { props.hideLeaderModal() }}>&times;</span>
                <div> {props.location} </div>
                <div id="leaderboard-title">Leaderboard: </div>
                <div id="leader-list-container">
                    <ol id="beach-list" className="leader-list">{props.beachList}</ol>
                </div>
            </div>
        </div>
    )
}

export default LeaderModal;