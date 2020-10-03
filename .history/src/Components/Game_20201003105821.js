import React, { useState, useEffect, useContext } from "react";
import "../App.css";
import Header from "./Header";
import Beach from "./Beach";
import LeaderModal from "./LeaderModal.js";


import { FirebaseContext } from '../utils/firebase'
import 'firebase/firestore'

function Game() {
    const [isWaldoFound, setIsWaldoFound] = useState(false);
    const [time, setTime] = useState(1);
    const [leaderModalOpen, setLeaderModalOpen] = useState(true);

   

    const firebase = useContext(FirebaseContext)
    const [list, setList] = useState(null)
    const ref = firebase.firestore().collection(`count`)
    const [count, setCount] = useState(0);

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
            console.log(snap)
            // console.log(snap.count)
            if (!snap) {
                setList(l => [])
                console.log("didn't snap")
            } else {
                console.log("snapped")
                let states = []
                snap.forEach(data => {
                    states.push({ key: data.id, ...data.data() })
                })
                setList(l => states)
                console.log(list)
            }
        }).catch(error => {
            // Handle the error
        }
        )
        console.log(list)
    }, [firebase])


    function foundWaldo() {
        setIsWaldoFound(true)
        console.log("Found Waldo")
        console.log(isWaldoFound)
        setTime(3)
        setCount(prevCount => prevCount + 1)
    }

    function hideLeaderModal() {
        setLeaderModalOpen(false)
    }

    function openLeaderModal() {
        setLeaderModalOpen(true)
    }

    return (
        <div>
            {leaderModalOpen && <LeaderModal 
                hideLeaderModal={hideLeaderModal}
            />}
            <Header 
                time={time}
                openLeaderModal={openLeaderModal}
            />
            <Beach
                isWaldoFound={isWaldoFound}
                foundWaldo={foundWaldo}
            />
            <div>{count}</div>
        </div>
    )
}

export default Game;