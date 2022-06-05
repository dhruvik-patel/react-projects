import React, {useState} from 'react'
import TodoForm from './TodoForm'
import '../styles/Todo.css'

function Todo({todos, updateTodo, deleteTodo}) {

    // Temporary todo to save data of edit todo
    const [editTodo, setEditTodo] = useState({id:null, text:''})

    const submitUpdate = (newTodo) => {
        console.log('inside submit Update');
        updateTodo(editTodo.id, newTodo)
        console.log('update todo completed');
        setEditTodo({ id: null, text: '' })
    }


    if(editTodo.id){
        // TodoForm return new todo
        return <TodoForm editTodo = { editTodo } onSubmit={submitUpdate}/>
    }

    return (
        <div className="todo-container">
            {todos.map((todo,index) => (
                <div key={index} className="todo-item">
                    <div className="item-text">
                        <p>{todo.text}</p>
                    </div>
                    <div className="item-button">
                        <button onClick={() => setEditTodo({ id: todo.id, text: todo.text })}>Edit</button>
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Todo
