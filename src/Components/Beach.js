import React from "react";
import "../App.css";
import beachPhoto from "../assets/beach.jpg";

function Beach(props) {

    console.log("here", props.isWaldoFound, props.location)
    return (
        <div>
            <div id="beach-container" className="photo-container">
                <img id="beach-photo" className="photo" src={beachPhoto} />
                {(props.isWaldoFound && (props.location == "beach")) ?
                    <div className="waldo-beach found"></div>
                    :
                    <div className="waldo-beach" onClick={props.foundWaldo}> </div> 
                }               
            </div>

        </div>
    )
}

export default Beach;

