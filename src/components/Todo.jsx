export const Todo = () => {
    return (
        <>
            <div className="todo-container">

                {/* Todo Header */}
                <div className="todo-header">
                    <h1>My Todo App</h1>
                    <p>Manage your daily tasks</p>
                </div>

                {/* Todo input */}
                <div className="todo-input">
                    <input
                        type="text"
                        placeholder="What needs to be done?"
                    />

                    <button>Add</button>
                </div>

                {/* Filter buttons */}
                <div className="filter-buttons">
                    <button className="active-filter">All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>

                {/* Todo list */}
                <div className="todo-list">

                    {/* Todo item */}
                    <div className="todo-item">
                        <div className="todo-content">
                            <input type="checkbox" />

                            <span>Learn React</span>
                        </div>

                        <div className="todo-actions">
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                    </div>

                    {/* Todo item */}
                    <div className="todo-item completed">
                        <div className="todo-content">
                            <input type="checkbox" checked readOnly />

                            <span>Learn JavaScript</span>
                        </div>

                        <div className="todo-actions">
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                    </div>

                    {/* Todo item */}
                    <div className="todo-item">
                        <div className="todo-content">
                            <input type="checkbox" />

                            <span>Build Portfolio</span>
                        </div>

                        <div className="todo-actions">
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                    </div>

                </div>

                {/* Todo statistics - just UI for now */}
                <div className="todo-footer">
                    <p>2 tasks remaining</p>
                </div>

            </div>
        </>
    )
}