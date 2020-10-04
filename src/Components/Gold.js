import React from "react";
import "../App.css";
import goldPhoto from "../assets/goldrush.jpg";

function Gold(props) {

    return (
        <div>
            <div id="gold-container" className="photo-container">
                <img id="gold-photo" className="photo" src={goldPhoto} />
                {(props.isWaldoFound && (props.location == "gold")) ?
                    <div className="waldo-gold found"></div>
                    :
                    <div className="waldo-gold" onClick={props.foundWaldo}> </div>
                }
            </div>

        </div>
    )
}

export default Gold;