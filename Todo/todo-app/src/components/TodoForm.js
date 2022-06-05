import React, { useState } from 'react'
import '../styles/TodoForm.css'

function TodoForm({onSubmit,editTodo}) {

    const [input,setInput] = useState('')

    const handleInputChange = (e) =>{
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const todo = {
            id: Math.floor(Math.random() * 100000),
            text:input
        }
        onSubmit(todo)
        setInput('')
    }
    
    return (
        <div className="todo-form-container">
            <form onSubmit={handleSubmit}>
                {editTodo ?
                    (<div className="input-div">
                        <input
                            type="text"
                            value={input}
                            onChange={handleInputChange}
                        />
                        <button>Edit Todo</button>
                    </div>) :
                    (<div className="input-div">
                        <input
                            type="text"
                            placeholder='Write Todo Text'
                            value={input}
                            onChange={handleInputChange}
                        />
                        <button>Add Todo</button>
                    </div>)}
            </form>
        </div>
    )
}

export default TodoForm
