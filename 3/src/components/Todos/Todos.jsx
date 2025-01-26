import React, {useState, useEffect} from "react";
import "./style.sass";
import service from "./../../services/todosAxios";
import TodoList from "./TodoList/TodoList.jsx";
import {TODO_STATUSES} from "../constants/todo.js";

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


    const handleItemStatus = async (status, item) => {
        try {
            item.status = status;
            await service.put(item.id, item);
            getTodos();
        } catch (err) {
            console.log(err);
        }
    };

    const handleItemArchive = async (item) => {
        try {
            await service.delete(item.id);
            getTodos();
        } catch (err) {
            console.log(err);
        }
    };

    const DATA = [
        {
            title: 'To do',
            list: todos.filter(todo => todo.status === TODO_STATUSES.TODO),
            buttons: [
                {
                    title: 'In progress',
                    action: handleItemStatus.bind(null, TODO_STATUSES.IN_PROGRESS),
                }
            ]

        },
        {
            title: 'In progress',
            list: todos.filter(todo => todo.status === TODO_STATUSES.IN_PROGRESS),
            buttons: [
                {
                    title: 'To Do',
                    action: handleItemStatus.bind(null, TODO_STATUSES.TODO),
                    className: 'button--one'
                },
                {
                    title: 'Done',
                    action: handleItemStatus.bind(null, TODO_STATUSES.DONE),
                },
            ]

        },
        {
            title: 'Done',
            list: todos.filter(todo => todo.status === TODO_STATUSES.DONE),
            buttons: [
                {
                    title: 'To Archive',
                    action: handleItemArchive,
                },
            ]

        }
    ];
    return todos.length ? (
        <div className="container">
            {DATA.map((item, i) => (
                <TodoList
                    key={i}
                    list={item.list}
                    title={item.title}
                    buttons={item.buttons}/>
            ))}
        </div>
    ) : null;
}
