import React from "react";
import {useNavigate} from "react-router-dom";

export default function NavigationBtn({title, navPath, className}) {
    const navigate = useNavigate();

    const handleClick = () => navigate(navPath);

    return <button className={className} onClick={handleClick}>{title}</button>;
}
