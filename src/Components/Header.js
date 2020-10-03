import React from "react";
import "../App.css";
import waldo from "../assets/waldo.png"


function Header() {

    return (
        <div id="header">
            <div id="header-container">
                <div id="title">Where's Waldo?</div>
                <img id="head" src={waldo} />
                <div id="leaderboard">Time</div>
                <div id="leaderboard">Leaderboard</div>
                <div id="menu">Menu</div>
            </div>
        </div>
    )
}

export default Header;