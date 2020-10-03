import React from "react";
import "../App.css";
import beachPhoto from "../assets/beach.jpg";

function Beach() {


    let waldoStatus = "";
    function foundWaldo() {
        waldoStatus = " found";
        console.log("Found Waldo")
    }


    return (
        <div>
            <div id="beach-container" className="photo-container">
                <img id="beach-photo" className="photo" src={beachPhoto} />
                <div id={`waldo-beach${waldoStatus}`} onClick={foundWaldo}></div>
            </div>

        </div>
    )
}

export default Beach;

