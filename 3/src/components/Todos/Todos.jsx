import React, {useState, useEffect} from "react";
import "./style.sass";

import service from "./../../services/todosAxios";
import ToDoList from "./ToDoList.jsx";
import InProgressList from "./InProgressList.jsx";
import DoneList from "./DoneList.jsx";

export default function Todos() {
    const [todos, setTodos] = useState([]);

    const getTodos = async () => {
        try {
            const response = await service.get();
            setTodos(response);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getTodos();
    }, []);

    return todos.length ? (
        <div className="container">
            <ToDoList todos={todos.filter(todo => todo.status === 0)} getTodos={getTodos}/>
            <InProgressList todos={todos.filter(todo => todo.status === 1)} getTodos={getTodos}/>
            <DoneList todos={todos.filter(todo => todo.status === 2)} getTodos={getTodos}/>
        </div>
    ) : null;
}
