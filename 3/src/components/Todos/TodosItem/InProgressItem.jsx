import React from "react";

import Button from './../../Button/Button'

export default function InProgressItem({item, handleItemToDo, handleItemDone}) {

    return (
        <li>
            {item.title}{" "}
            <Button className='button--one' title="To Do" handleClick={(e) => handleItemToDo(e, item)}/>
            <Button title="Done" handleClick={(e) => handleItemDone(e, item)}/>
        </li>
    );
}
