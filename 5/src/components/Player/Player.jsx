import React, {useContext} from 'react';
import BattleContext from "../../contexts/BattleContext.js";
import Button from "../Button/Button.jsx";
import {PLAYERS_COUNT} from "../../constants/battle.js";

export default function Player({cardId}) {
    const {players, removePlayer} = useContext(BattleContext);
    const {battleStarted, placeCalculated} = useContext(BattleContext);

    const player = players[cardId];

    const resetPlayer = (id) => {
        removePlayer(id);
    }

    return (
        <>
            {battleStarted &&
                <h2>{player.place === 1 ? 'Winner 🥳' : (player.place === PLAYERS_COUNT ? "Loser 🥵" : player.place)}</h2>
            }

            <img className="player__avatar" src={player.avatar_url} alt={player.login}/>
            <h4 className="player__title">@{player.login}</h4>

            {!battleStarted &&
                <Button title="Restart 🔄" className="mt-1" handleClick={() => {
                    resetPlayer(cardId)
                }}/>}

            {battleStarted &&
                <ul>
                    <li>🫂Followers: {player.followers}</li>
                    <li>🌟Repositories stars: {player.stargazers_count}</li>
                    <li className="bold">🏁Total: {player.total}</li>
                </ul>}
        </>

    )
}