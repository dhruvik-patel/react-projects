import React from 'react'
import LoginForm from './LoginForm'
import './static/styles.css'
import sideImage from "./static/side.jpg"

const Login = () => {
    return (
        <div className='loginContainer'>
            <div className='imageContainer'>
                <img src={sideImage} alt="Side" />
            </div>
            <LoginForm />
        </div>
    )
}

export default Login
