import React from "react";
import "../App.css";
import beachPhoto from "../assets/beach.jpg";

function Photo() {

    return (
        <div>
            <div id="beach-container" className="photo-container"></div>
            <img id="beach-photo" className="photo" src={beachPhoto} />
        </div>
    )
}

export default Photo;

