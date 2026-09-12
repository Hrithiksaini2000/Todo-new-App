export const TodoList = ({ todo, toggle, ondelete, onedit, editId, editText, seteditText, saveEdit }) => {
    return (
        <div className="todo-list">
            {/* Todo item */}
            {/* We use ternary opertaor to add completed */}
            <div className={`todo-item ${todo.completed ? "completed" : " "}`} key={todo.id}>
                <div className="todo-content">
                    <input type="checkbox" checked={todo.completed} onChange={() => toggle(todo.id)} />
                    {/* We use ternary operator conditon based html field will be come in brackets () */}
                    {todo.id === editId ? (
                        <input className="edit-input" value={editText} onChange={(e) => seteditText(e.target.value)} />
                    ) : (<span>{todo.title}</span>)}
                </div>

                <div className="todo-actions">
                    {todo.id === editId ? (
                        <button onClick={() => saveEdit(todo.id)}>Save</button>
                    )
                        : (
                            <button onClick={() => onedit(todo.id)}>Edit</button>
                        )
                    }
                    <button onClick={() => ondelete(todo.id)}>Delete</button>
                </div>
            </div>
        </div>
    )
}