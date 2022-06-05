import React, { useState,useRef,useEffect } from 'react'
import './UserForm.css'

function UserForm({ onSubmit, editUser}) {

    const [usernameInput, setUsernameInput] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [cityInput, setCityInput] = useState('')
    const usernameRef = useRef()

    useEffect(() => {
        usernameRef.current.focus()
    },[])

    const generateUser = (e) => {
        e.preventDefault()
        const userTemp = {
            id: Math.floor(Math.random() * 100000),
            username:usernameInput,
            email:emailInput,
            city:cityInput
        }
        onSubmit(userTemp)
        setUsernameInput('')
        setEmailInput('')
        setCityInput('')
    }

    return (
        <form onSubmit={generateUser}>
            {editUser ?
                <div>
                    <input
                        type="text"
                        placeholder="Edit username"
                        value={usernameInput}
                        onChange={(e) => setUsernameInput(e.target.value)}
                        ref={usernameRef}
                    />
                    <input
                        type="text"
                        placeholder="Edit email id"
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Edit city"
                        value={cityInput}
                        onChange={(e) => setCityInput(e.target.value)}
                    />
                    <button>Save User</button>
                </div>:
                <div>
                    <input
                        type="text"
                        placeholder="Enter username"
                        value={usernameInput}
                        onChange={(e) => setUsernameInput(e.target.value)}
                        ref={usernameRef}
                    />
                    <input
                        type="text"
                        placeholder="Enter email id"
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Enter city"
                        value={cityInput}
                        onChange={(e) => setCityInput(e.target.value)}
                    />
                    <button>Add User</button>
                </div>}
        </form>
    )
}

export default UserForm


