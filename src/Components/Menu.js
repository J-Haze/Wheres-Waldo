import React from "react";
import "../App.css";
import waldo from "../assets/waldo.png";

function Menu(props) {

    return (
        <div id="menu-content">
            <div id="top-row">
                <div id="menu-title">Where's Waldo?</div>
                <img id="menu-head" src={waldo} />
            </div>
            <div id="row-two"> Created by Justin Hazelton</div>
            <div id="all-cards">{props.places}</div>
        </div>

    )
}

export default Menu;