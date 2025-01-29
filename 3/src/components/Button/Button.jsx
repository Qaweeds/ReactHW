import React from "react";

export default function Button({title = ``, className = ``, handleClick}) {
    return <button className={className} onClick={handleClick}>{title}</button>;
}
