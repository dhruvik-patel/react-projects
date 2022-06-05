import React,{ useState, useEffect} from 'react'
import axios from 'axios'

function FetchDataOne() {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then( response => {
            setLoading(false)
            setError('')
            setPost(response.data)
        })
        .catch( error => {
            setLoading(false)
            setError('Something went wrong!!')
            setPost({})
        })
    } ,[])

    return (
        <div>
            {loading ? 'Loading' : <h1>{post.title}</h1>}
            {error ? error : null}
        </div>
    )
}

export default FetchDataOne
