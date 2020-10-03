import React from "react";
import "../App.css";
import waldo from "../assets/waldo.png"


function Header(props) {

    return (
        <div id="header">
            <div id="header-container">
                <div id="title">Where's Waldo?</div>
                <img id="head" src={waldo} />
                <div id="time-box">
                <div id="time">{props.time}</div> 
                </div>
                <div id="leaderboard">Leaderboard</div>
                <div id="menu">Menu</div>
            </div>
        </div>
    )
}

export default Header;