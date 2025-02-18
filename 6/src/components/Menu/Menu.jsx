import React from "react";
import {NavLink} from "react-router-dom";

export default function Menu() {

    const routes = [
        {
            path: `/`,
            title: `Home`,
        },
        {
            path: `/countries`,
            title: `Countries`,
        },
    ];

    return (
        <nav>
            <ul>
                {routes.map((item, index) => (
                    <li key={index}>
                        <NavLink to={item.path}>
                            {item.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
