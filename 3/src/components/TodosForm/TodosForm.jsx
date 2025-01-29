import React, {useRef, useState} from "react";
import "./style.sass";
import {TODO_CONFIG, TODO_FORM_STATUSES_CONFIG,} from "../../config/todo.js";

export default function TodosForm({liftingNewTodo}) {
    const formRef = useRef();

    const [newTodo, setNewTodo] = useState([]);

    const options = {...TODO_CONFIG.filter(item => TODO_FORM_STATUSES_CONFIG.includes(item.status))};

    const handleFormTitle = (e) => {
        setNewTodo((prevState) => ({...prevState, title: e.target.value}));
    };

    const handleFormStatus = (e) => {
        setNewTodo((prevState) => ({...prevState, status: Number(e.target.value)}));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (liftingNewTodo(newTodo)) {
            formRef.current.reset();
        }
    };

    return (
        <form className="todo__form" onSubmit={handleFormSubmit} ref={formRef}>
            <label>
                Title{" "}
                <input
                    type="text"
                    onChange={handleFormTitle}
                />
            </label>
            <label>
                Status{" "}
                <select
                    onChange={handleFormStatus}
                    defaultValue=''
                >
                    <option value='' disabled></option>
                    {Object.keys(options).map((k, i) => (
                        <option key={i} value={options[k].status}>{options[k].title}</option>
                    ))}
                </select>
            </label>
            <button>Add todo</button>
        </form>
    );
}
