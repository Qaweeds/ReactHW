import {useReducer, useRef, useState} from "react";
import {initialState, reducer} from "../store/player/reducer.js";
import routes from "../services/battle.js";
import {ADD_PLACE, ADD_PLAYER, ADD_PLAYER_DATA, REMOVE_PLAYER, RESET} from "../store/player/actions.js";
import {actionCreator} from "../store/store.js";

export default function usePlayer(setRatingData) {
    const [players, dispatchPlayer] = useReducer(reducer, initialState);
    const addPlayer = async (name, id) => {
        try {
            const response = await routes.user(name);
            dispatchPlayer(actionCreator(ADD_PLAYER, response, id))
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    const removePlayer = async (id) => {
        dispatchPlayer(actionCreator(REMOVE_PLAYER, null, id));
    }

    const resetPlayers = async () => {
        dispatchPlayer(actionCreator(RESET));
    }

    const addPlayerData = async (name, id) => {
        try {
            const response = await routes.userRepos(name);
            let stars = response.reduce((acc, curr) => acc + curr.stargazers_count, 0);
            let total = players[id].followers + stars;
            dispatchPlayer(actionCreator(ADD_PLAYER_DATA, {stargazers_count: stars, total: total}, id));

            setRatingData((prev) => [...prev, {id: id, total: total}]);
        } catch (err) {
            console.log(err);
        }
    }

    const addPlayerPlace = (id, place) => {
        dispatchPlayer(actionCreator(ADD_PLACE, {place: place}, id));
    }


    return {players, addPlayer, removePlayer, resetPlayers, addPlayerData, addPlayerPlace}
}