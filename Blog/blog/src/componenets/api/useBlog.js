import { useState, useEffect } from 'react'
import axios from '../../axiox'

const useBlog = () => {

    const [posts, setPosts] = useState([])
    const url = 'posts'

    // const fetchPosts = async () => {
    //     const {data} = await axios.get(url)
    //     setPosts(data)
    // }

    const fetchPosts = () => {
        axios.get(url)
        .then((res) => {
            const allPosts = res.data.slice(0,6)
            const updatedPosts = allPosts.map(post => ({...post, author: 'Dhruvik'}))
            setPosts(updatedPosts)
        })
        .catch(err => console.log(err.message))
    }

    useEffect(fetchPosts,[])

    return {posts, fetchPosts}
}

export default useBlog
