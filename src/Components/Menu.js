import React from "react";
import "../App.css";
import waldo from "../assets/waldo.png";
// import placesData from "./placesData.js";
// import PlaceCard from "./PlaceCard.js"

function Menu(props) {


    // const places = placesData.map((place) =>
    //     <PlaceCard
    //         key={place.id}
    //         title={place.title}
    //         image={place.image}
    //     />
    // );

    return (
        <div id="menu-content">
            <div id="top-row">
            <div id="menu-title">Where's Waldo?</div>
                <img id="menu-head" src={waldo} />
            </div>
            <div id="row-two"> Created by Justin Hazelton</div>
            <div id="all-cards">{props.places}</div>

            
            {/* <div className="playButton" onClick={props.playBeach}>Play</div> */}
        </div>

    )
}

export default Menu;