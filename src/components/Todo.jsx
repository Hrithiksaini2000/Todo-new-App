import { useState } from "react"

export const Todo = () => {

    // All states 

    const [todos, setTodo] = useState([
        {
            id: 1,
            title: "Learn React",
            completed: false
        },
        {
            id: 2,
            title: "Learn Javascript",
            completed: true
        },
        {
            id: 3,
            title: "Build Portfolio",
            completed: false
        }
    ])

    // This state is created where we can store the input 
    const [input, setinput] = useState("")

    const addtodo = () => {

        // For Remove of the white space we use trim in the input 
        if (!input.trim()) return

        const newtodo = {
            id: Date.now(),
            title: input,
            completed: false
        }

        setTodo([...todos, newtodo])

        setinput("")

        console.log(todos)
    }


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
                        value={input}
                        onChange={(e) => setinput(e.target.value)}
                    />

                    <button onClick={addtodo}>Add</button>
                </div>

                {/* Filter buttons */}
                <div className="filter-buttons">
                    <button className="active-filter">All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>

                {/* use map method Mapping to make Todo list UI visible */}
                {
                    todos.map((todo) => {
                        return(
                            <div className="todo-list">
                            {/* Todo item */}
                            <div className="todo-item" key={todo.id}>
                                <div className="todo-content">
                                    <input type="checkbox" />

                                    <span>{todo.title}</span>
                                </div>

                                <div className="todo-actions">
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </div>
                            </div>
                        </div>
                        )
                    })
                }

                {/* Todo statistics - just UI for now */}
                <div className="todo-footer">
                    <p>2 tasks remaining</p>
                </div>

            </div>
        </>
    )
}