export const TodoList = ({todo, toggle, ondelete}) => {
    return (
        <div className="todo-list">
            {/* Todo item */}
            {/* We use ternary opertaor to add completed */}
            <div className={`todo-item ${todo.completed ? "completed" : " "}`} key={todo.id}>
                <div className="todo-content">
                    <input type="checkbox" checked={todo.completed} onChange={() => toggle(todo.id)} />

                    <span>{todo.title}</span>
                </div>

                <div className="todo-actions">
                    <button>Edit</button>
                    <button onClick={() => ondelete(todo.id)}>Delete</button>
                </div>
            </div>
        </div>
    )
}