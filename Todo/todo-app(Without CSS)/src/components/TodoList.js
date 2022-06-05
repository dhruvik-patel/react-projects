import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'


function TodoList() {

    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        setTodos([...todos,todo])
        console.log([...todos])
    }

    const updateTodo = (editTodoId,newTodo) => {
        setTodos(prev => prev.map(todo => todo.id===editTodoId ? newTodo : todo));
    }

    const deleteTodo = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
    }

    return (
        <div>
            <TodoForm onSubmit={addTodo}/>
            <Todo todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        </div>
    )
}

export default TodoList
