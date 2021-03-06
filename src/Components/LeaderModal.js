import React from "react";
import "../App.css";

function LeaderModal(props) {

    let renderLeaderboard = "";
    if (props.location == "beach") {
        renderLeaderboard =
            (<div className="leader-container">
                <div className="leader-title">Waldo at the Beach</div>
                <div id="leaderboard-title"> Leaderboard: </div>
                <div id="leader-list-container">
                    <ol id="beach-list" className="leader-list">{props.dispBeachList}</ol>
                </div>
            </div>)
    } else if (props.location == "park") {
        renderLeaderboard =
            (<div className="leader-container">
                <div className="leader-title">Waldo at the Fair</div>
                <div id="leaderboard-title"> Leaderboard: </div>
                <div id="leader-list-container">
                    <ol id="park-list" className="leader-list">{props.dispParkList}</ol>
                </div>
            </div>)
    } else if (props.location == "store") {
        renderLeaderboard =
            (<div className="leader-container">
                <div className="leader-title">Waldo goes Shopping</div>
                <div id="leaderboard-title"> Leaderboard: </div>
                <div id="leader-list-container">
                    <ol id="store-list" className="leader-list">{props.dispStoreList}</ol>
                </div>
            </div>)
    } else if (props.location == "castle") {
        renderLeaderboard =
            (<div className="leader-container">
                <div className="leader-title">Renaissance Waldo</div>
                <div id="leaderboard-title"> Leaderboard: </div>
                <div id="leader-list-container">
                    <ol id="store-list" className="leader-list">{props.dispCastleList}</ol>
                </div>
            </div>)
    } else if (props.location == "gold") {
        renderLeaderboard =
            (<div className="leader-container">
                <div className="leader-title">Waldo Strikes Gold</div>
                <div id="leaderboard-title"> Leaderboard: </div>
                <div id="leader-list-container">
                    <ol id="store-list" className="leader-list">{props.dispGoldList}</ol>
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