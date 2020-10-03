import React, { useState, useEffect, useContext } from "react";
import "../App.css";
import Header from "./Header";
import Beach from "./Beach";
import LeaderModal from "./LeaderModal.js";
import SubmitModal from "./SubmitModal.js";


import { FirebaseContext } from '../utils/firebase'
import 'firebase/firestore'

function Game() {
    const [isWaldoFound, setIsWaldoFound] = useState(false);
    const [time, setTime] = useState(1);
    const [leaderModalOpen, setLeaderModalOpen] = useState(false);
    const [submitModalOpen, setSubmitModalOpen] = useState(false);


    const [location, setLocation] = useState("Waldo at the Beach");



    const firebase = useContext(FirebaseContext)
    const [list, setList] = useState(null)
    const ref = firebase.firestore().collection(`players`)
    const query = ref.orderBy("time").limit(5);
    const [count, setCount] = useState(0);

    let timeString = "";

    // useEffect(() => {
    //     const rootRef = firebase.database().ref().child('react');
    //     const waldoRef = rootRef.child('waldo');
    //     waldoRef.on('value', snap => {
    //         // const [isWaldoFound, setIsWaldoFound] = useState(false);
    //     });
    // }, []
    // );

    // useEffect(() => {
    //     ref.get().then(snap => {
    //         console.log(snap)
    //         // console.log(snap.count)
    //         if (!snap) {
    //             setList(l => [])
    //             console.log("didn't snap")
    //         } else {
    //             console.log("snapped")
    //             let states = []
    //             snap.forEach(data => {
    //                 states.push({ key: data.id, ...data.data() })
    //             })
    //             setList(l => states)
    //             console.log(list)
    //         }
    //     }).catch(error => {
    //         // Handle the error
    //     }
    //     )
    //     console.log(list)
    // }, [firebase])

    useEffect(() => {
        query.get().then(snap => {
            if (!snap) {
                setList(l => [])
            } else {
                let players = []
                snap.forEach(player => {
                    players.push({ key: player.id, ...player.data() })
                })
                setList(l => players)
            }
        }).catch(error => {
            // Handle the error
        })
    }, [firebase])

    let beachList
    if (list === null) {
        beachList = (<li>Loading leaderboard...</li>)
    } else if (list.length === 0) {
        beachList = (<li>No players yet.</li>)
    } else {
        beachList = list.map(player => {
            return (<li key={player.key}>{player.name} {player.time}</li>)
        })
    }


    function foundWaldo() {
        setIsWaldoFound(true)
        // console.log("Found Waldo")
        // console.log(isWaldoFound)
        setTime3)
        openSubmitModal();
    }

    function hideLeaderModal() {
        setLeaderModalOpen(false)
    }

    function openLeaderModal() {
        setLeaderModalOpen(true)
    }


    function hideSubmitModal() {
        setSubmitModalOpen(false)
    }

    function openSubmitModal() {
        setSubmitModalOpen(true)
    }

    function submitTime() {
        timeString = `{time} sec`;
        console.log(timeString)
    }

    return (
        <div>
            {leaderModalOpen && <LeaderModal
                location={location}
                hideLeaderModal={hideLeaderModal}
                beachList={beachList}
            />}
            {submitModalOpen && <SubmitModal
                time={time}
                hideSubmitModal={hideSubmitModal}
                location={location}
                submitTime={submitTime}
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