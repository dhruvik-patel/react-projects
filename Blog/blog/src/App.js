import React from 'react'
import Blogs from './componenets/Blogs/Blogs'
import Header from './componenets/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import classes from './App.module.css'
import CreatePost from './componenets/Blogs/CreatePost/CreatePost'
import About from './componenets/About/About'

const App = () => {
    return (
        <BrowserRouter>
            <div className={classes.Container}>
                <Header />
                {/* <Blogs /> */}
                <Routes>
                    <Route path='/' exact element={<Blogs/>} />
                    <Route path='/new-post' element={<CreatePost/>} />
                    <Route path='/about' element={<About />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
