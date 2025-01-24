import React from "react";

import Button from './../../Button/Button'

export default function DoneItem({item, handleItem}) {
    return (
        <li>
            {item.title}{" "}
            <Button title="To archive" handleClick={(e) => handleItem(e, item)}/>
        </li>
    );
}
