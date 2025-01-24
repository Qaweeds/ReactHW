import React from "react";
import "./style.sass";

export default function Button({title = ``, className = ``, handleClick}) {
    return <button className={className} onClick={handleClick}>{title}</button>;
}
