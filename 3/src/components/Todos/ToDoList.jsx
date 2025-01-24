import ToDoItem from "./TodosItem/ToDoItem.jsx";
import service from "../../services/todosAxios.js";

export default function ToDoList({todos, getTodos}) {
    const handleItemInProgress = async (e, item) => {
        try {
            item.status = 1;
            await service.put(item.id, item);
            getTodos();
        } catch (err) {
            console.log(err);
        }
    };

    return <div className='column'>
        <h3>To Do: {todos.length}</h3>
        {todos.length ? (
            <ul>
                {todos.map((item) => (
                    <ToDoItem
                        key={item.id}
                        item={item}
                        handleItem={handleItemInProgress}
                    />
                ))}
            </ul>
        ) : null}
    </div>
}