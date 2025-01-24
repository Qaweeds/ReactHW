import React from "react";

import Button from './../../Button/Button'

export default function ToDoItem({item, handleItem}) {

    return (
        <li>
            {item.title}{" "}
            <Button title="In Progress" handleClick={(e) => handleItem(e, item)}/>
        </li>
    );
}
