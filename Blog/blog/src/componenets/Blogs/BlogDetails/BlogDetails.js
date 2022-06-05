import React, { useState, useEffect } from 'react'
import axios from 'axios'
import classes from '../Blog/Blog.module.css'

const BlogDetails = ({ id }) => {

    const [post, setPost] = useState({})

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`

        axios.get(url)
            .then((res) => (setPost(res.data)))
            .catch(err => console.log(err.message))
    }, [id])

    return (
        <div className={classes.Blog} style={{ width: '100%' }}>
            <h3>{post.id}. {post.title}</h3>
            <h5>Created By : user {post.userId}</h5>
            <p>{post.body}</p>
        </div>
    )
}

export default BlogDetails