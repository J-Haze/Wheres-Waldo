import React, { useState, useEffect } from "react";
import "../App.css";
import Header from "./Header"
import Beach from "./Beach"

function Game() {
    [waldoFound, setWaldoFound] = useState(false);
    
    function foundWaldo() {
        setWaldoFound(true)
        console.log("Found Waldo")
    }


    return (
        <div>
            <Header />
            <Beach 
                waldoStatus={waldoStatus}
                foundWaldo={foundWaldo}
            />
        </div>
    )
}

export default Game;