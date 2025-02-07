import {useReducer} from "react";
import {initialState, reducer} from "../store/player/reducer.js";
import routes from "../services/battle.js";
import {ADD_PLAYER, ADD_PLAYER_DATA, REMOVE_PLAYER, RESET} from "../store/player/actions.js";
import {actionCreator} from "../store/store.js";
import {ERR_BAD_REQUEST, NOT_FOUND} from "../constants/battle.js";

export default function usePlayer() {
    const [players, dispatchPlayer] = useReducer(reducer, initialState);
    const addPlayer = async (name, id) => {
        try {
            const response = await routes.user(name);
            if (validateUnique(response.login)) {
                dispatchPlayer(actionCreator(ADD_PLAYER, response, id))
            } else {
                return {error: true, msg: "User already in the Battle"}
            }
        } catch (err) {
            console.log(err);
            switch (err.status) {
                case ERR_BAD_REQUEST:
                    return {error: true, msg: "Forbiden"};
                case NOT_FOUND:
                    return {error: true, msg: "Username not found"};
                default:
                    return {error: true, msg: err.status};
            }
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

            return {id: id, total: total};
        } catch (err) {
            console.log(err);
        }
    }

    const addPlayerPlace = (id, place) => {
        dispatchPlayer(actionCreator(ADD_PLAYER_DATA, {place: place}, id));
    }

    const validateUnique = (username) => {
        return !(Object.values(players).filter((p) => p.login === username)).length;
    }
    return {players, addPlayer, removePlayer, resetPlayers, addPlayerData, addPlayerPlace}
}