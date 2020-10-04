import React from "react";
import "../App.css";
import parkPhoto from "../assets/theme-park.jpg";

function Park(props) {

    return (
        <div>
            <div id="park-container" className="photo-container">
                <img id="park-photo" className="photo" src={parkPhoto} />
                {(props.isWaldoFound && (props.location == "park")) ?
                    <div className="waldo-park found"></div>
                    :
                    <div className="waldo-park" onClick={props.foundWaldo}> </div>
                }
            </div>

        </div>
    )
}

export default Park;