import React, { useState, useEffect } from "react";
import "../App.css";
import Header from "./Header"
import Beach from "./Beach"

function Game() {
    const [isWaldoFound, setIsWaldoFound] = useState(false);
    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     const rootRef = firebase.database().ref().child('react');
    //     const waldoRef = rootRef.child('waldo');
    //     waldoRef.on('value', snap => {
    //         // const [isWaldoFound, setIsWaldoFound] = useState(false);
    //     });
    // }, []
    // );


    function foundWaldo() {
        setIsWaldoFound(true)
        console.log("Found Waldo")
        console.log(isWaldoFound)
        setCount(1)
    }

    return (
        <div>
            <Header />
            <Beach
                isWaldoFound={isWaldoFound}
                foundWaldo={foundWaldo}
            />
            <div>{count}</div>
        </div>
    )
}

export default Game;