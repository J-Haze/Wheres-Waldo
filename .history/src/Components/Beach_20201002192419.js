import React from "react";
import "../App.css";
import beachPhoto from "../assets/beach.jpg";

function Beach(props) {





    return (
        <div>
            <div id="beach-container" className="photo-container">
                <img id="beach-photo" className="photo" src={beachPhoto} />
                <div id={`waldo-beach${props.waldoStatus}`} onClick={props.foundWaldo}></div>
            </div>

        </div>
    )
}

export default Beach;

