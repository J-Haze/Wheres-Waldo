import React from "react";
import "../App.css";

function PlaceCard(props) {


    return (
        <div id={props.title} className="card">
            <div className="card-title"> {props.title} </div>
            <div className="card-buttons">
                <div className="card-play btn" onClick={() => props.play(props.location)}> Play </div>
                <div className="card-scores btn" onClick={() => props.scores(props.location)}> High Scores </div>
            </div>
            <img className="card-image" src={props.image} />
        </div>


    )

}

export default PlaceCard;