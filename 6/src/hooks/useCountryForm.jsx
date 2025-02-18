import {useEffect, useState} from 'react';
import useCountry from "./useCountry.jsx";


export default function useCountryForm() {
    const {countries, setSelected, getSelected} = useCountry();
    const [translation, setTranslation] = useState();

    const selectedCountry = getSelected();

    useEffect(() => {
        selectedCountry && setTranslation(Object.keys(selectedCountry.translations)[0])
    }, [countries]);


    const capitalList = () => {
        return countries.map((country) => ({value: country.capital[0], name: country.flag + country.capital[0]}))
    }

    const translationList = () => {
        return Object.keys(getSelected().translations).map((key) => ({value: key, name: key}))
    }
    return {translation, setTranslation, countries, capitalList, translationList, setSelected, getSelected, selectedCountry};
}
