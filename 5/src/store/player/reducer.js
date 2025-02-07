import {ADD_PLAYER, ADD_PLAYER_DATA, REMOVE_PLAYER, RESET} from "./actions.js";

const initialState = {};

const reducer = (state, {type, payload, id}) => {
    switch (type) {
        case ADD_PLAYER:
            return {...state, [id]: payload};
        case REMOVE_PLAYER:
            let newPlayers = {...state};
            delete (newPlayers[id]);
            return newPlayers;
        case ADD_PLAYER_DATA:
            return {...state, [id]: {...state[id], ...payload}};
        case RESET:
            return initialState;
        default:
            console.log('no type')
            return state;
    }
};

export {reducer, initialState};