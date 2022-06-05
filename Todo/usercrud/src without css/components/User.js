import React,{useState} from 'react'
import UserForm from './UserForm'
import './User.css'

function User({ users , editUserMethod, deleteUserMethod}) {

    const [editUser, setEditUser] = useState({
        id:null,
        username: '',
        email: '',
        city: ''
    })

    // tempUser is passed when method is called in userForm
    const handleSubmit = (newUser) => {
        editUserMethod(editUser.id,newUser)
        setEditUser({id:null,username:'',email:'',city:''})
    }

    if(editUser.id){
        // handle submit will return a new user object
        return <UserForm editUser={editUser} onSubmit={handleSubmit} />
    }

    return (
        <div class='user-all'>
            {
                users.map((user, index) => {
                    return (<div key={index} class='user-info'>
                                <div class='user-info-content'>
                                    <h3>{user.username}</h3>
                                    <h3>{user.email}</h3>
                                    <h3>{user.city}</h3>
                                </div>
                                <div class='user-info-options'>
                                    <button onClick={() => setEditUser(user)}>Edit</button>
                                    <button onClick={() => deleteUserMethod(user.id)}>Delete</button>
                                </div>
                            </div>)
                })
            }
        </div>
    )
}

export default User
