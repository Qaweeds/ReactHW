import React from 'react';
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import useCountry from "../../../hooks/useCountry.jsx";
import Button from "../../Button/Button.jsx";
import NavigationBtn from "../../NavigationBtn/NavigationBtn.jsx";

function CountryInfo() {
    const {country} = useParams()
    const {countries, deleteCountry} = useCountry();
    const [searchParams] = useSearchParams();
    const translation = searchParams.get('translation');
    const countryInfo = countries.find((q) => q.name.official === country)
    const navigate = useNavigate();

    const deleteCountryAndNavigate = (id) => {
        deleteCountry(id).then((res) => res && navigate('/countries'));
    }

    return countryInfo ? (
            <>
                <div className="country__info">
                    <h4>
                        {Object.keys(countryInfo.translations).includes(translation) ?
                            countryInfo.translations[translation].official :
                            countryInfo.name.official}
                    </h4>
                    <ul>
                        <li><span className="title">Name:</span>
                            <ul>
                                <li><span className="title">Official:</span> {countryInfo.name.official}</li>
                                <li><span className="title">Common:</span> {countryInfo.name.common}</li>
                            </ul>
                        </li>
                        <li><span className="title">Currencies:</span>
                            {Object.keys(countryInfo.currencies).map((key, i) => (
                                <ul key={i}>
                                    <li><span className="title">{key}</span></li>
                                    <ul>
                                        <li><span className="title">Name:</span> {countryInfo.currencies[key].name}</li>
                                        <li><span className="title">Symbol:</span> {countryInfo.currencies[key].symbol}</li>
                                    </ul>
                                </ul>
                            ))}
                        </li>
                        <li><span className="title">Capital:</span>
                            {countryInfo.capital.map((key, i) => (
                                <ul key={i}>
                                    <li>{key}</li>
                                </ul>
                            ))}
                        </li>
                        <li><span className="title">Region:</span> {countryInfo.region}</li>
                        <li><span className="title">Subregion:</span> {countryInfo.subregion}</li>
                        <li><span className="title">Languages:</span>
                            {Object.keys(countryInfo.languages).map((key, i) => (
                                <ul key={i}>
                                    <li><span className="title">{key.toUpperCase()}:</span> {countryInfo.languages[key]}</li>
                                </ul>
                            ))}
                        </li>
                        <li><span className="title">Flag:</span> {countryInfo.flag}</li>
                        <li><span className="title">Translations:</span>
                            {Object.keys(countryInfo.translations).map((key, i) => (
                                <ul key={i}>
                                    <li className="capitalize"><span className="title">{key}</span></li>
                                    <ul>
                                        <li><span className="title">Official:</span> {countryInfo.translations[key].official}</li>
                                        <li><span className="title">Common:</span> {countryInfo.translations[key].common}</li>
                                    </ul>
                                </ul>
                            ))}
                        </li>
                    </ul>

                    <Button title="Delete Country" onClick={() => deleteCountryAndNavigate(countryInfo.id)}/>
                </div>
                <NavigationBtn className="back-to" navPath={'/countries'} title="Back to Countries"/>
            </>
        ) :
        null;
}

export default CountryInfo;