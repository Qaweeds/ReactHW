import {DELETE_COUNTRY, INIT, SELECT} from "./actions.js";

const initialState = [];

const reducer = (state, {type, payload}) => {
    switch (type) {
        case DELETE_COUNTRY:
            console.log(DELETE_COUNTRY)
            break;
        case INIT:
            return payload;
        case SELECT:
            return state.map((country) => country.capital[0] === payload.capital ? {...country, selected: true} : {...country, selected: false});
        default:
            return state;
    }
};

export {reducer, initialState};