import React from "react";
import "../App.css";
import waldo from "../assets/waldo.png"


function Header(props) {

    return (
        <div id="header">
            <div id="header-container">
                <div id="title">Where's Waldo?</div>
                <img id="head" src={waldo} />
                <div id="time-box"> Time:
                    <div id="time">{props.time.toFixed(1)}</div>
                </div>
                <div id="leaderboard" onClick={() => { props.openLeaderModal() }}>Leaderboard</div>
                <div id="menu" onClick={props.toMenu}>Menu</div>
            </div>
        </div>
    )
}

export default Header;