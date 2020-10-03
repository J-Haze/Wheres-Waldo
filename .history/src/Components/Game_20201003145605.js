import React, { useState, useEffect, useContext } from "react";
import "../App.css";
import Header from "./Header";
import Beach from "./Beach";
import LeaderModal from "./LeaderModal.js";
import SubmitModal from "./SubmitModal.js";

import { FirebaseContext } from '../utils/firebase'
import 'firebase/firestore'
import { set } from "date-fns";

import badWords from "../../node_modules/bad-words";
// const Filter = require(badWords);

function Game() {
    const [isWaldoFound, setIsWaldoFound] = useState(false);
    const [time, setTime] = useState(1);
    const [playerName, setPlayerName] = useState("");
    const [leaderModalOpen, setLeaderModalOpen] = useState(false);
    const [submitModalOpen, setSubmitModalOpen] = useState(false);
    const [update, setUpdate] = useState(false);
    const [gameStart, setGameStart] = useState(false);


    const [location, setLocation] = useState("Waldo at the Beach");



    const firebase = useContext(FirebaseContext)
    const [list, setList] = useState(null)
    const leaderRef = firebase.firestore().collection(`players`)
    const query = leaderRef.orderBy("time").limit(5);
    

    let timeString = "";
    let rounded = "";
    let timeDec = "";
    let beachList;

    const filter = new badWords();

    console.log(filter)

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
            console.log("Error: Fetching Leaderboard")
        })


    }, [update])

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
        setTime(1)
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

    const submitTime = async () => {
        // e.preventDefault();
        if (playerName == "") {
            alert("Please enter a valid name")
            return
        }

        if (filter.isProfane(playerName)) {
            alert("Watch your profanity")
            setPlayerName("");
            return
        }


        rounded = Math.round(time * 10) / 10;
        timeDec = rounded.toFixed(1);
        timeString = `${timeDec} sec`;

        await leaderRef.add({
            time: timeString,
            name: playerName
        });

        setPlayerName("");
        setUpdate(!update);
        setSubmitModalOpen(false);

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
                playerName={playerName}
                setPlayerName={setPlayerName}
            />}
            <Header
                time={time}
                openLeaderModal={openLeaderModal}
            />
            {gameStart ?
                <Beach
                    isWaldoFound={isWaldoFound}
                    foundWaldo={foundWaldo}
                /> :
                <div className="start-button">Start</div>
                
                }
        </div>
    )
}

export default Game;