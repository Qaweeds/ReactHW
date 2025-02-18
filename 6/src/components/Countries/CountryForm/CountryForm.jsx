import React, {useEffect, useRef, useState} from 'react';
import Select from "../../Select/Select.jsx";
import {Link} from "react-router-dom";
import useCountryForm from "../../../hooks/useCountryForm.jsx";

function CountryForm(props) {
    const {translation, setTranslation, countries, capitalList, translationList, setSelected, selectedCountry} = useCountryForm();
    const changeTranslationSelect = (e) => {
        setSelected(e.target.value)
    }

    return countries.length ? (
        <div className="country__form">
            <h4>Country Form Component</h4>
            <form>
                <Select data={capitalList()} onChange={changeTranslationSelect}/>
                <Select onChange={(e) => setTranslation(e.target.value)} data={translationList()}/>

                <Link to={`countries/${selectedCountry.name.official}?translation=${translation}`}>Read more
                    about {selectedCountry.name.official}</Link>
            </form>
        </div>
    ) : null

}

export default CountryForm;