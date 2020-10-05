import React, { useState, useEffect, useContext } from "react";
import "../App.css";
import Header from "./Header";
import LeaderModal from "./LeaderModal.js";
import SubmitModal from "./SubmitModal.js";
import Menu from "./Menu.js";
import placesData from "./placesData.js";
import PlaceCard from "./PlaceCard.js"

import Beach from "./Beach.js";
import Park from "./Park.js";
import Store from "./Store.js";
import Castle from "./Castle.js";
import Gold from "./Gold.js"

import { FirebaseContext } from '../utils/firebase'
import 'firebase/firestore'

import badWords from "../../node_modules/bad-words";

function Game() {
    const [isWaldoFound, setIsWaldoFound] = useState(false);
    const [time, setTime] = useState(0);
    const [timerActive, setTimerActive] = useState(false);
    const [playerName, setPlayerName] = useState("");
    const [leaderModalOpen, setLeaderModalOpen] = useState(false);
    const [submitModalOpen, setSubmitModalOpen] = useState(false);
    const [update, setUpdate] = useState(false);
    const [menuOpen, setMenuOpen] = useState(true);

    const [gameStart, setGameStart] = useState(false);
    const [location, setLocation] = useState("beach");
    const [title, setTitle] = useState("");

    const firebase = useContext(FirebaseContext);

    const [beachList, setBeachList] = useState(null);
    const beachRef = firebase.firestore().collection('beach');
    const beachQuery = beachRef.orderBy("time").limit(5);

    const [parkList, setParkList] = useState(null);
    const parkRef = firebase.firestore().collection('park');
    const parkQuery = parkRef.orderBy("time").limit(5);

    const [storeList, setStoreList] = useState(null);
    const storeRef = firebase.firestore().collection('store');
    const storeQuery = storeRef.orderBy("time").limit(5);

    const [castleList, setCastleList] = useState(null);
    const castleRef = firebase.firestore().collection('castle');
    const castleQuery = castleRef.orderBy("time").limit(5);

    const [goldList, setGoldList] = useState(null);
    const goldRef = firebase.firestore().collection('gold');
    const goldQuery = goldRef.orderBy("time").limit(5);

    let timeString = "";
    let rounded = "";
    let timeDec = "";

    const filter = new badWords();

    //Retrieve Beach Leaderboard
    useEffect(() => {
        beachQuery.get().then(snap => {
            if (!snap) {
                setBeachList(l => [])
            } else {
                let beachPlayers = []
                snap.forEach(player => {
                    beachPlayers.push({ key: player.id, ...player.data() })
                })
                setBeachList(l => beachPlayers)
            }
        }).catch(error => {
            // Handle the error
            console.log("Error: Fetching Leaderboard")
        })
    }, [update])

    let dispBeachList;
    if (beachList === null) {
        dispBeachList = (<li>Loading leaderboard...</li>)
    } else if (beachList.length === 0) {
        dispBeachList = (<li>No players yet.</li>)
    } else {
        dispBeachList = beachList.map(player => {
            return (<li key={player.key}><div className="item-cont"><div className="list-name">{player.name}</div><div className="list-time">{player.time}</div></div></li>)
        })
    }

    //Retrieve Park Leaderboard
    useEffect(() => {
        parkQuery.get().then(snap => {
            if (!snap) {
                setParkList(l => [])
            } else {
                let parkPlayers = []
                snap.forEach(player => {
                    parkPlayers.push({ key: player.id, ...player.data() })
                })
                setParkList(l => parkPlayers)
            }
        }).catch(error => {
            // Handle the error
            console.log("Error: Fetching Leaderboard")
        })
    }, [update])

    let dispParkList;
    if (parkList === null) {
        dispParkList = (<li>Loading leaderboard...</li>)
    } else if (parkList.length === 0) {
        dispParkList = (<li>No players yet.</li>)
    } else {
        dispParkList = parkList.map(player => {
            return (<li key={player.key}><div className="item-cont"><div className="list-name">{player.name}</div><div className="list-time">{player.time}</div></div></li>)
        })
    }

    //Retrieve Store Leaderboard
    useEffect(() => {
        storeQuery.get().then(snap => {
            if (!snap) {
                setStoreList(l => [])
            } else {
                let storePlayers = []
                snap.forEach(player => {
                    storePlayers.push({ key: player.id, ...player.data() })
                })
                setStoreList(l => storePlayers)
            }
        }).catch(error => {
            // Handle the error
            console.log("Error: Fetching Leaderboard")
        })
    }, [update])

    let dispStoreList;
    if (storeList === null) {
        dispStoreList = (<li>Loading leaderboard...</li>)
    } else if (storeList.length === 0) {
        dispStoreList = (<li>No players yet.</li>)
    } else {
        dispStoreList = storeList.map(player => {
            return (<li key={player.key}><div className="item-cont"><div className="list-name">{player.name}</div><div className="list-time">{player.time}</div></div></li>)
        })
    }

    //Retrieve Castle Leaderboard
    useEffect(() => {
        castleQuery.get().then(snap => {
            if (!snap) {
                setCastleList(l => [])
            } else {
                let castlePlayers = []
                snap.forEach(player => {
                    castlePlayers.push({ key: player.id, ...player.data() })
                })
                setCastleList(l => castlePlayers)
            }
        }).catch(error => {
            // Handle the error
            console.log("Error: Fetching Leaderboard")
        })
    }, [update])

    let dispCastleList;
    if (castleList === null) {
        dispCastleList = (<li>Loading leaderboard...</li>)
    } else if (castleList.length === 0) {
        dispCastleList = (<li>No players yet.</li>)
    } else {
        dispCastleList = castleList.map(player => {
            return (<li key={player.key}><div className="item-cont"><div className="list-name">{player.name}</div><div className="list-time">{player.time}</div></div></li>)
        })
    }

    //Retrieve Gold Rush Leaderboard
    useEffect(() => {
        goldQuery.get().then(snap => {
            if (!snap) {
                setGoldList(l => [])
            } else {
                let goldPlayers = []
                snap.forEach(player => {
                    goldPlayers.push({ key: player.id, ...player.data() })
                })
                setGoldList(l => goldPlayers)
            }
        }).catch(error => {
            // Handle the error
            console.log("Error: Fetching Leaderboard")
        })
    }, [update])

    let dispGoldList;
    if (goldList === null) {
        dispGoldList = (<li>Loading leaderboard...</li>)
    } else if (goldList.length === 0) {
        dispGoldList = (<li>No players yet.</li>)
    } else {
        dispGoldList = goldList.map(player => {
            return (<li key={player.key}><div className="item-cont"><div className="list-name">{player.name}</div><div className="list-time">{player.time}</div></div></li>)
        })
    }

    function startTimer() {
        setTimerActive(true);
    };

    function stopTimer() {
        setTimerActive(false);
    };

    function resetTimer() {
        setTimerActive(false);
        setTime(0)
    };


    useEffect(() => {
        let interval = null;
        if (timerActive) {
            interval = setInterval(() => {
                setTime((Math.round((time + 0.1) * 10) / 10));
            }, 100);
        } else if (!timerActive && time !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [timerActive, time]);

    function foundWaldo() {
        setIsWaldoFound(true);
        stopTimer();
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

    function startGame() {
        setGameStart(true);
        startTimer();
    }

    const submitTime = async () => {
        if (playerName == "") {
            alert("Please enter a name")
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

        if (location == "beach") {
            await beachRef.add({
                time: timeString,
                name: playerName
            });
        }

        if (location == "park") {
            await parkRef.add({
                time: timeString,
                name: playerName
            });
        }

        if (location == "store") {
            await storeRef.add({
                time: timeString,
                name: playerName
            });
        }

        if (location == "castle") {
            await castleRef.add({
                time: timeString,
                name: playerName
            });
        }

        if (location == "gold") {
            await goldRef.add({
                time: timeString,
                name: playerName
            });
        }

        setPlayerName("");
        setUpdate(!update);
        setSubmitModalOpen(false);
    }

    function toMenu() {
        resetTimer();
        setIsWaldoFound(false);
        setGameStart(false);
        setMenuOpen(true)
    }

    function play(location) {
        setLocation(location);
        setMenuOpen(false);
    }

    function scores(location) {
        setLocation(location);
        openLeaderModal(false);
    }

    useEffect(() => {
        if (location == "beach") {
            setTitle("Waldo at the Beach")
        } else if (location == "park") {
            setTitle("Waldo at the Fair")
        } else if (location == "store") {
            setTitle("Waldo goes Shopping")
        } else if (location == "castle") {
            setTitle("Renaissance Waldo")
        } else if (location == "gold") {
            setTitle("Waldo Strikes Gold")
        }
    }, [location]);


    const places = placesData.map(place =>
        <PlaceCard
            key={place.id}
            title={place.title}
            image={place.image}
            location={place.location}
            play={play}
            scores={scores}
        />
    );

    return (
        <div>
            {leaderModalOpen && <LeaderModal
                location={location}
                hideLeaderModal={hideLeaderModal}
                dispBeachList={dispBeachList}
                dispParkList={dispParkList}
                dispStoreList={dispStoreList}
                dispCastleList={dispCastleList}
                dispGoldList={dispGoldList}
            />}
            {submitModalOpen && <SubmitModal
                time={time}
                hideSubmitModal={hideSubmitModal}
                location={location}
                submitTime={submitTime}
                playerName={playerName}
                setPlayerName={setPlayerName}
            />}
            {menuOpen ?
                <Menu
                    places={places}
                /> :
                <div>
                    <Header
                        time={time}
                        openLeaderModal={openLeaderModal}
                        toMenu={toMenu}
                    />
                    {(!gameStart) ?
                        <div id="start-screen">
                            <div id="start-title">{title}</div>
                            <div className="start-button" onClick={startGame}>Start</div>
                        </div> :
                        (location == "beach") ?
                            <Beach
                                isWaldoFound={isWaldoFound}
                                foundWaldo={foundWaldo}
                                location={location}
                            /> :
                            (location == "store") ?
                                <Store
                                    isWaldoFound={isWaldoFound}
                                    foundWaldo={foundWaldo}
                                    location={location}
                                /> :
                                (location == "castle") ?
                                    <Castle
                                        isWaldoFound={isWaldoFound}
                                        foundWaldo={foundWaldo}
                                        location={location}
                                    /> :
                                    (location == "gold") ?
                                        <Gold
                                            isWaldoFound={isWaldoFound}
                                            foundWaldo={foundWaldo}
                                            location={location}
                                        /> :
                                        <Park
                                            isWaldoFound={isWaldoFound}
                                            foundWaldo={foundWaldo}
                                            location={location}
                                        />
                    }
                </div>}

        </div>
    )
}

export default Game;