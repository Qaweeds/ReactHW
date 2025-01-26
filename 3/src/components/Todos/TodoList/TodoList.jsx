import TodoItem from "../TodosItem/TodoItem.jsx";

export default function TodoList({list = [], title = '', buttons = []}) {

    return <div className='column'>
        <h3>{title}: {list.length}</h3>
        {list.length ? (
            <ul>
                {list.map((item) => (
                    <TodoItem
                        key={item.id}
                        item={item}
                        buttons={buttons}
                    />
                ))}
            </ul>
        ) : null}
    </div>
}