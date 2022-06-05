import React, { useState } from 'react'
import useBlog from '../api/useBlog'
import Blog from './Blog/Blog'
import classes from './Blogs.module.css'
import BlogDetails from './BlogDetails/BlogDetails'

const Blogs = () => {
    // const { posts, fetchPosts } = useBlog()
    const { posts } = useBlog()
    const [selectedId, setSelectedId] = useState(null)

    const selectIdHandler = (id) => {
        setSelectedId(id)
    }

    return (
        <div className={classes.Blogs}>
            <div>
                <h2>All Blogs</h2>
            </div>
            {selectedId ? <BlogDetails id={selectedId} /> : null}

            {!posts.length ? '' :
                posts.map(post => <Blog key={post.id} post={post} clicked={() => selectIdHandler(post.id)} />)}
        </div>
    )
}

export default Blogs