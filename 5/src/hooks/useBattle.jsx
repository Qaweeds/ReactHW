import React, {useReducer, useState} from "react";
import {initialState, reducer} from "../store/player/reducer.js";
import routes from "../services/battle.js";
import {ADD_PLACE, ADD_PLAYER, ADD_PLAYER_DATA, REMOVE_PLAYER, RESET} from "../store/player/actions.js";
import {actionCreator} from "../store/store.js";
import {PLAYERS_COUNT} from "../constants/battle.js";
import BattleCard from "../components/BattleCard/BattleCard.jsx";
import usePlayer from "./usePlayer.jsx";

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