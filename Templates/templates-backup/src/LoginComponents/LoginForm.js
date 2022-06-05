import React from 'react'

const LoginForm = () => {
    return (
        <div className='formContainer'>
            <div className="formHeader">
                <p>Welcome Back</p>
                <h3>Login to your Account</h3>
            </div>
            
            <form className='formInput'>
                <div className='inputField'>
                    <label htmlFor="email">Email</label>
                    <input type="text" name='email' />
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' />
                </div>
                <div className='radioField'>
                    <input type="radio" name='remember' />
                    <label htmlFor="remember">Remember Me</label>
                    <a href="#">Forgot Password?</a>
                </div>
                <div className='buttonField'>
                    <button className='login'>Login Now</button>
                    <button className='google'>Or SignIn With Google</button>
                </div>
            </form>

            <div className="formFooter">
                <p>Don't have an account? <span><a href="#">Join free today</a></span></p>
            </div>
        </div>
    )
}

export default LoginForm
