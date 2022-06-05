import React from 'react'
import classes from './Blog.module.css'

const Blog = ({ post, clicked }) => {
    return (
        <div className={classes.Blog} onClick={clicked}>
            <h3>{post.id}. {post.title}</h3>
            <h5>Created By : {post.author}</h5>
            {/* <p>{post.body}</p> */}
        </div>
    )
}

export default Blog