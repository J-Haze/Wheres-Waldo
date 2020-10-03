import React, { useState, useEffect, useContext } from "react";
import "../App.css";
import Header from "./Header"
import Beach from "./Beach"
import { FirebaseContext } from '../utils/firebase'
import 'firebase/firestore'

function Game() {
    const [isWaldoFound, setIsWaldoFound] = useState(false);
    const [count, setCount] = useState(0);

    const firebase = useContext(FirebaseContext)
    const [list, setList] = useState(null)
    const ref = firebase.firestore().collection(`count`)

    // useEffect(() => {
    //     const rootRef = firebase.database().ref().child('react');
    //     const waldoRef = rootRef.child('waldo');
    //     waldoRef.on('value', snap => {
    //         // const [isWaldoFound, setIsWaldoFound] = useState(false);
    //     });
    // }, []
    // );

    useEffect(() => {
        ref.get().then(snap => {
            // console.log(snap)
            // console.log(snap.count)
            if (!snap) {
                setList(l => [])
            } else {
                let states = []
                snap.forEach(data => {
                    states.push({ key: data.id, ...data.data() })
                })
                setList(l => states)
            }
        }).catch(error => {
            // Handle the error
        }
        console.log(states.count)
        )
    }, [])


    function foundWaldo() {
        setIsWaldoFound(true)
        console.log("Found Waldo")
        console.log(isWaldoFound)
        setCount(prevCount => prevCount + 1)
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