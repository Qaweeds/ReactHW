import React, {useEffect} from 'react';
import {PLAYERS_COUNT} from "../../constants/battle.js";

import "./battle.sass";
import BattleContext from "../../contexts/BattleContext.js";
import Button from "../Button/Button.jsx";
import usePlayer from "../../hooks/usePlayer.jsx";
import useBattle from "../../hooks/useBattle.jsx";


export default function Battle() {

    const {createCards, ratingData, setRatingData, battleStarted, setBattleStarted} = useBattle();
    const {players, addPlayer, removePlayer, resetPlayers, addPlayerData, addPlayerPlace} = usePlayer(setRatingData);
    const data = createCards();

    useEffect(() => {
        if (battleStarted && ratingData.length === PLAYERS_COUNT) {
            let place = 1;
            ratingData.sort((a, b) => b.total - a.total).map((obj, i) => addPlayerPlace(obj.id, place++));
        }
    }, [ratingData]);

    const startBattle = () => {
        Object.keys(players).map((k) => {
            addPlayerData(players[k].login, k);
        })
        return setBattleStarted(true);
    }


    const resetBattle = () => {
        resetPlayers();
        setBattleStarted(false);
        setRatingData([]);
    }
    return (

        <BattleContext.Provider value={{players, addPlayer, removePlayer, addPlayerData, battleStarted}}>
            <h1>Lets Get Ready to Rumble 🥊</h1>
            <div className='container'>
                {data}
            </div>
            {Object.keys(players).length === PLAYERS_COUNT && !battleStarted &&
                <Button className="battle__button" title="Battle!" handleClick={startBattle}/>
            }
            {Object.keys(players).length === PLAYERS_COUNT && battleStarted &&
                <Button className="battle__button" title="Reset" handleClick={resetBattle}/>
            }
        </BattleContext.Provider>


    )
}