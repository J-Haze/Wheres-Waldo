import React from "react";
import "../App.css";

function LeaderModal(props) {


    return (
        <div className="modal" onClick={() => { props.hideLeaderModal() }}>
            <div id="leaderModal" className="modal-content" onClick={(event) => { event.stopPropagation() }}>
                <span className="close" onClick={() => { props.hideLeaderModal() }}>&times;</span>
            </div>
        </div>
    )
}

export default LeaderModal;