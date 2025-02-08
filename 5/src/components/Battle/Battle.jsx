import React, {useEffect, useRef, useState} from 'react';
import {PLAYERS_COUNT} from "../../constants/battle.js";

import "./battle.sass";
import BattleContext from "../../contexts/BattleContext.js";
import Button from "../Button/Button.jsx";
import usePlayer from "../../hooks/usePlayer.jsx";
import useBattle from "../../hooks/useBattle.jsx";


export default function Battle() {
    const [playerCount, setPlayerCount] = useState(0);
    const playerCountInputRef = useRef();
    const {data, createCards, ratingData, setRatingData, battleStarted, setBattleStarted} = useBattle();
    const {players, addPlayer, removePlayer, resetPlayers, addPlayerData, addPlayerPlace} = usePlayer();

    useEffect(() => {
        createCards(playerCount);
    }, [playerCount])

    useEffect(() => {
        if (battleStarted && ratingData.length === playerCount) {
            let place = 1;
            ratingData.sort((a, b) => b.total - a.total).map((obj) => addPlayerPlace(obj.id, place++));
        }
    }, [ratingData]);

    const startBattle = () => {
        setBattleStarted(true);
        Object.keys(players).map((k) => {
            addPlayerData(players[k].login, k)
                .then((data) => data && setRatingData((prev) => [...prev, data]));
        })
    }

    const resetBattle = () => {
        resetPlayers();
        setBattleStarted(false);
        setRatingData([]);
    }

    return (
        <BattleContext.Provider value={{players, addPlayer, removePlayer, addPlayerData, battleStarted, playerCount}}>
            {playerCount ?
                <>
                    <h1>Lets Get Ready to Rumble 🥊</h1>
                    <div className='container'>
                        {data}
                    </div>
                    {Object.keys(players).length === playerCount && !battleStarted &&
                        <Button className="battle__button" title="Battle!" handleClick={startBattle}/>
                    }
                    {Object.keys(players).length === playerCount && battleStarted &&
                        <Button className="battle__button" title="Reset" handleClick={resetBattle}/>
                    }
                </> :
                <div className="set_players_count_block">
                    <div>
                        <label htmlFor="player_count">Set players count. (Max {PLAYERS_COUNT} players)</label>
                        <input id="player_count" type="number" ref={playerCountInputRef}/>
                    </div>
                    <Button title="Start" handleClick={() => setPlayerCount(Math.min(Number(playerCountInputRef.current.value), PLAYERS_COUNT))}/>

                </div>
            }
        </BattleContext.Provider>
    )
}