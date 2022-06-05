import React, { useState } from 'react'

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
        <form onSubmit={handleSubmit}>
            {editTodo?
                (<>
                    <input
                        type="text"
                        value={input}
                        onChange={handleInputChange}
                    />
                    <button>Edit Todo</button>
                </>):
                (<>
                    <input
                        type="text"
                        placeholder='Write Todo Text'
                        value={input}
                        onChange={handleInputChange}
                    />
                    <button>Add Todo</button>
                </>)}
        </form>
    )
}

export default TodoForm
