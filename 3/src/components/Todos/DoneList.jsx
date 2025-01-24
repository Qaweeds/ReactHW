import React from "react";
import service from "../../services/todosAxios.js";
import DoneItem from "./TodosItem/DoneItem.jsx";

export default function DoneList({todos, getTodos}) {

    const handleItemToArchive = async (e, item) => {
        try {
            await service.delete(item.id);
            getTodos();
        } catch (err) {
            console.log(err);
        }
    };

    return <div className='column'>
        <h3>Done: {todos.length}</h3>
        {todos.length ? (
            <ul>
                {todos.map((item) => (
                    <DoneItem
                        key={item.id}
                        item={item}
                        handleItem={handleItemToArchive}
                    />
                ))}
            </ul>
        ) : null}
    </div>
}