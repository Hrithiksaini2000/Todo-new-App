import { useState } from "react"
import { TodoHeader } from "./TodoHeader"
import { TodoInput } from "./TodoInput"
import { TodoList } from "./TodoList"
import { TodoFooter } from "./TodoFooter"

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

    // Add function logic
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

    // Delete function logic 
    const deletetodo = (id) => {
        const updatedtodo = todos.filter((todo) => todo.id !== id)

        setTodo(updatedtodo)
    }

    // Completed toggle function logic 
    const toggletodo = (id) => {
        const updatedtoggle = todos.map((todo) => {

            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo
        })

        setTodo(updatedtoggle)
    }

    // Edit functionality state is created 
    const [editId, setEditId] = useState(null)

    const [editText, seteditText] = useState("")

    // edit functionality
    const startEdit = (id) => {

        const todo = todos.find((todo) => todo.id === id)

        setEditId(id)
        seteditText(todo.title)
        console.log(editId)
    }

    // Save the edit functionality 
    const saveEdit = (id) => {

        const updatetodo = todos.map((todo) => {
            if (todo.id === id) {
                return ({
                    ...todo,
                    title: editText
                })
            }
            return todo
        })

        setTodo(updatetodo)
        setEditId(null)
        seteditText("")
    }

    return (
        <>
            <div className="todo-container">

                {/* Todo Header */}
                <TodoHeader />

                {/* Todo input */}
                {/* Props names can be use different */}
                <TodoInput text={input} changetext={setinput} add={addtodo} />

                {/* Filter buttons */}
                <div className="filter-buttons">
                    <button className="active-filter">All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>

                {/* use map method Mapping to make Todo list UI visible */}
                {
                    todos.map((todo) => {
                        return (
                            <TodoList key={todo.id} todo={todo} toggle={toggletodo} ondelete={deletetodo} onedit={startEdit} editId={editId} editText={editText} seteditText={seteditText} saveEdit={saveEdit} />
                        )
                    })
                }

                {/* Todo statistics - just UI for now */}
                <TodoFooter />

            </div>
        </>
    )
}