import React, { useState } from 'react'
import UserForm from './UserForm'
import User from './User'
import './UserList.css'

function UserList() {

    const [users,setUsers] = useState([])

    const addUser = (userTemp) => {
        setUsers([...users,userTemp])
    }

    const editUserMethod = (oldUserId,newUser) => {
        setUsers(prev => prev.map(user => user.id===oldUserId ? newUser : user))
    }

    const deleteUserMethod = (id) => {
        const newUsers = users.filter(user => id!==user.id)
        setUsers(newUsers)
    }
    return (
        <div class='container'>
            <UserForm onSubmit={addUser}/>
            <User users={users} editUserMethod={editUserMethod} deleteUserMethod={deleteUserMethod} />
        </div>
    )
}

export default UserList



