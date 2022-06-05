import React,{ useState, useEffect } from 'react'
import { getPosts } from './api/index'

const Posts = () => {

    const [posts, setPosts] = useState([])

    

    useEffect(() => {
        const getData = async () => {
            const { data } = await getPosts();
            setPosts(data)
        }
        getData()
    },[posts])

    return (
        <div>
            { 
                posts && posts.map(post => (
                    <div key={post._id}>
                        <p>{post.name}</p>
                        <p>{post.bdate}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Posts
