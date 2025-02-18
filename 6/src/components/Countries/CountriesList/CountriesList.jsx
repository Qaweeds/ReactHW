import React from 'react';
import useCountry from "../../../hooks/useCountry.jsx";
import {Link} from "react-router-dom";
import Button from "../../Button/Button.jsx";

function CountriesList() {
    const {countries, deleteCountry} = useCountry();
    return (
        countries.length ?
            <div className="countries__list">
                <h4>Countries list</h4>
                <ul>
                    {countries.map((country, i) => (
                        <li key={i}>
                            <Link to={country.name.official}>{country.flag + country.name.official}</Link>
                            <Button title="Delete" onClick={() => deleteCountry(country.id)}/>
                        </li>
                    ))}
                </ul>
            </div> : <h2>"Many countries, one planet"</h2>
    );
}

export default CountriesList;