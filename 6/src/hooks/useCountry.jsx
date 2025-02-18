import React, {useEffect, useReducer, useState} from 'react';
import mockapi from "../services/countries.js";
import {initialState, reducer} from "../store/country/reducer.js";
import {INIT, SELECT} from "../store/country/actions.js";
import {actionCreator} from "../store/store.js";
import countryForm from "../components/Countries/CountryForm/CountryForm.jsx";


export default function useCountry() {
    const [countries, dispatchCountries] = useReducer(reducer, initialState);

    const loadCountry = async () => {
        try {
            const res = await mockapi.get();
            dispatchCountries(actionCreator(INIT, res));
            dispatchCountries(actionCreator(SELECT, {capital: res[0].capital[0]}));
        } catch (err) {
            console.log(err);
        }
    }

    const deleteCountry = async (id) => {
        try {
            await mockapi.delete(id);
            loadCountry();
            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    }
    const setSelected = (capital) => {
        dispatchCountries(actionCreator(SELECT, {capital: capital}));
    }

    useEffect(() => {
        loadCountry();
    }, []);


    const getSelected = () => {
        return countries.find((country) => country.selected);
    };


    return {countries, setSelected, getSelected, deleteCountry};
}
