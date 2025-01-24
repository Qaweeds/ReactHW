import React from "react";
import service from "../../services/todosAxios.js";
import InProgressItem from "./TodosItem/InProgressItem.jsx";

export default function InProgressList({todos, getTodos}) {

    const handleItemDone = async (e, item) => {
        try {
            item.status = 2;
            await service.put(item.id, item);
            getTodos();
        } catch (err) {
            console.log(err);
        }
    };

    const handleItemToDo = async (e, item) => {
        try {
            item.status = 0;
            await service.put(item.id, item);
            getTodos();
        } catch (err) {
            console.log(err);
        }
    };

    return <div className='column'>
        <h3>In Progress: {todos.length}</h3>
        {todos.length ? (
            <ul>
                {todos.map((item) => (
                    <InProgressItem
                        key={item.id}
                        item={item}
                        handleItemDone={handleItemDone}
                        handleItemToDo={handleItemToDo}
                    />
                ))}
            </ul>
        ) : null}
    </div>
}