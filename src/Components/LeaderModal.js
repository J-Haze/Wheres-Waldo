import React from "react";
import "../App.css";

function LeaderModal(props) {

    console.log(props.dispParkList)
    let renderLeaderboard = "";
    if (props.location == "beach") {
        renderLeaderboard =
            (<div>
                <div> Waldo at the Beach </div>
                <div id="leaderboard-title"> Leaderboard: </div>
                <div id="leader-list-container">
                    <ol id="beach-list" className="leader-list">{props.dispBeachList}</ol>
                </div>
            </div>)
    } else if (props.location == "park") {
        renderLeaderboard =
            (<div>
                <div> Waldo at the Amusement Park </div>
                <div id="leaderboard-title"> Leaderboard: </div>
                <div id="leader-list-container">
                    <ol id="park-list" className="leader-list">{props.dispParkList}</ol>
                </div>
            </div>)
    }

    return (
        <div className="modal" onClick={() => { props.hideLeaderModal() }}>
            <div id="leader-modal" className="modal-content" onClick={(event) => { event.stopPropagation() }}>
                <span className="close" onClick={() => { props.hideLeaderModal() }}>&times;</span>
                {renderLeaderboard}
            </div>
        </div>
    )
}

export default LeaderModal;