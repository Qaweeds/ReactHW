import Layout from "../pages/Layout.jsx";
import CountryPage from "../pages/CountryPage.jsx";
import HomePage from "../pages/HomePage.jsx";
import CountriesPage from "../pages/CountriesPage.jsx";

export const routes = [
    {
        path: `/`,
        element: <Layout/>,
        children: [
            {
                path: `/`,
                element: <HomePage/>,
            },
            {
                path: `countries`,
                element: <CountriesPage/>,
            },
            {
                path: `countries/:country`,
                element: <CountryPage/>
            },
        ]
    }
];