import React, { useState, useEffect } from "react";
import "../App.css";
import Header from "./Header"
import Beach from "./Beach"

function Game() {
    const [isWaldoFound, setIsWaldoFound] = useState(false);

    function foundWaldo() {
        setIsWaldoFound(true)
        console.log("Found Waldo")
    }

    return (
        <div>
            <Header />
            <Beach 
                isWaldoFound={isWaldoFound}
                foundWaldo={foundWaldo}
            />
        </div>
    )
}

export default Game;