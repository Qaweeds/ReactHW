import React, {useReducer, useState} from "react";
import {PLAYERS_COUNT} from "../constants/battle.js";
import BattleCard from "../components/BattleCard/BattleCard.jsx";

export default function useBattle() {
    const [ratingData, setRatingData] = useState([]);
    const [battleStarted, setBattleStarted] = useState(false);
    const createCards = () => {
        let cards = [];
        for (let i = 1; i <= PLAYERS_COUNT; i++) {
            cards.push(<BattleCard key={i} cardId={i}/>)
        }
        return cards;
    }

    return {createCards, ratingData, setRatingData, battleStarted, setBattleStarted}
}