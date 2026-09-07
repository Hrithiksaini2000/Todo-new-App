export const TodoInput = ({text, changetext, add}) => {
    return (
        <div className="todo-input">
            <input
                type="text"
                placeholder="What needs to be done?"
                value={text}
                onChange={(e) => changetext(e.target.value)}
            />

            <button onClick={add}>Add</button>
        </div>
    )
}