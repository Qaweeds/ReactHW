import React from "react";
import Button from './../../Button/Button'

export default function TodoItem({item, buttons}) {

    return (
        <li>
            {item.title}{" "}
            {buttons.map((button, i) => (
                <Button
                    key={i}
                    title={button.title}
                    handleClick={() => button.action(item)}
                    className={button.className}
                />
            ))}
        </li>
    );
}
