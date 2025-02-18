import React from 'react';
import {Outlet} from "react-router-dom";
import HeaderPage from "./HeaderPage.jsx";

function Layout() {
    return (
        <>
            <HeaderPage/>
            <main>
                <Outlet/>
            </main>
            <footer></footer>
        </>
    )
}

export default Layout;