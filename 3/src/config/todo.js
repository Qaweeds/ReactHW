import {TODO_STATUSES} from "../constants/todo.js";

/**
 * Не знаю куда это засунуть. TODO_CONFIG, по идее, вообще словарь - должен с бека приходить.
 * TODO_CONFIG - наверно можно и в компонент формы оформить, но пусть пока тут побудет
 * */
const TODO_CONFIG = [
    {
        status: 0,
        title: "To do",
        order: 1
    },
    {
        status: 1,
        title: "In Progress",
        order: 3
    },
    {
        status: 2,
        title: "Done",
        order: 4
    },
    {
        status: 4,
        title: "On Hold",
        order: 2
    }
];

const TODO_FORM_STATUSES_CONFIG = [TODO_STATUSES.TODO, TODO_STATUSES.IN_PROGRESS, TODO_STATUSES.DONE];

export {TODO_CONFIG, TODO_FORM_STATUSES_CONFIG};