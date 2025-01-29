import React from "react";
import Button from '../../../Button/Button.jsx'

export default function TodoItem({item, buttons}) {


    return (
        <li>
            {item.title}{" "}
            <div className="todo__buttons">
                {buttons.map((button, i) => (
                    <Button
                        key={i}
                        title={button.title}
                        handleClick={() => button.action(item)}
                        className={button.className}
                    />
                ))}
            </div>
        </li>
    );
}
