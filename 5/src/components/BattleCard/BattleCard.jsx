import React, {useContext} from 'react';
import BattleContext from "../../contexts/BattleContext.js";
import Player from "../Player/Player.jsx";
import Search from "../Search/Search.jsx";

export default function BattleCard({cardId}) {

    const {players} = useContext(BattleContext);

    return (
        <>
            <div className="card">
                {players[cardId] ? <Player key={cardId} cardId={cardId}/> : <Search key={cardId} cardId={cardId}/>}
            </div>
        </>

    )
}