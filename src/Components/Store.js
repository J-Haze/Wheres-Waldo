import React from "react";
import "../App.css";
import storePhoto from "../assets/store.jpg";

function Store(props) {

    return (
        <div>
            <div id="store-container" className="photo-container">
                <img id="store-photo" className="photo" src={storePhoto} />
                {(props.isWaldoFound && (props.location == "store")) ?
                    <div className="waldo-store found"></div>
                    :
                    <div className="waldo-store" onClick={props.foundWaldo}> </div>
                }
            </div>
        </div>
    )
}

export default Store;