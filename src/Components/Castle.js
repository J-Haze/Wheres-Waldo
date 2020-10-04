import React from "react";
import "../App.css";
import castlePhoto from "../assets/castle.jpg";

function Castle(props) {

    return (
        <div>
            <div id="castle-container" className="photo-container">
                <img id="castle-photo" className="photo" src={castlePhoto} />
                {(props.isWaldoFound && (props.location == "castle")) ?
                    <div className="waldo-castle found"></div>
                    :
                    <div className="waldo-castle" onClick={props.foundWaldo}> </div>
                }
            </div>

        </div>
    )
}

export default Castle;