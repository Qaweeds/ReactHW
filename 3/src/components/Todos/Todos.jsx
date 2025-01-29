import React, {useState, useEffect} from "react";
import "./style.sass";
import service from "./../../services/todosAxios";
import TodoList from "./TodoList/TodoList.jsx";
import {TODO_STATUSES} from "../../constants/todo.js";
import {TODO_CONFIG} from "../../config/todo.js";
import TodosForm from "../TodosForm/TodosForm.jsx";

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
            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    };

    const handleItemArchive = async (item) => {
        try {
            await service.delete(item.id);
            getTodos();
            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    };

    const addNewTodo = async (item) => {
        try {
            await service.post(item);
            getTodos();
            return true;
        } catch (err) {
            return false;
        }
    }

    /*lifting функции, но не уверен в их необходимости при нынешней организации логики */
    // const changeStatus = async (status, item) => {
    //     return handleItemStatus(status, item);
    // }
    //
    // const archiveItem = async (item) => {
    //     return handleItemArchive(item);
    // }

    const BUTTONS = {
        [TODO_STATUSES.TODO]: [
            {
                title: 'In progress',
                action: handleItemStatus.bind(null, TODO_STATUSES.IN_PROGRESS),
            }
        ],
        [TODO_STATUSES.IN_PROGRESS]: [
            {
                title: 'On Hold',
                action: handleItemStatus.bind(null, TODO_STATUSES.ON_HOLD),
            },
            {
                title: 'To Do',
                action: handleItemStatus.bind(null, TODO_STATUSES.TODO),
            },
            {
                title: 'Done',
                action: handleItemStatus.bind(null, TODO_STATUSES.DONE),
            },
        ],
        [TODO_STATUSES.DONE]: [
            {
                title: 'To Archive',
                action: handleItemArchive,
            }
        ],
        [TODO_STATUSES.ON_HOLD]: [
            {
                title: 'To Do',
                action: handleItemStatus.bind(null, TODO_STATUSES.TODO),
                className: 'button--one'
            },
            {
                title: 'In progress',
                action: handleItemStatus.bind(null, TODO_STATUSES.IN_PROGRESS),
            },
        ],
    }

    const DATA = [
        ...TODO_CONFIG.map((config) => ({
            ...config,
            list: todos.filter(todo => todo.status === config.status),
            buttons: BUTTONS[config.status]
        }))
    ].sort((a, b) => a.order - b.order);

    return <>
        <TodosForm liftingNewTodo={addNewTodo}/>
        {todos.length ? (
            <div className="container">
                {DATA.map((item, i) => (
                    <TodoList
                        key={i}
                        list={item.list}
                        title={item.title}
                        buttons={item.buttons}/>
                ))}
            </div>
        ) : null
        }
    </>
}
