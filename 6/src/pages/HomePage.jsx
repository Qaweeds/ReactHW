import React from 'react';
import Home from "../components/Home/Home.jsx";
import CountryForm from "../components/Countries/CountryForm/CountryForm.jsx";

function HomePage(props) {
    return (
        <>
            <Home/>
            <CountryForm/>
        </>
    );
}

export default HomePage;