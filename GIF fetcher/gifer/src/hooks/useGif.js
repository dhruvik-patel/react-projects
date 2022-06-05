import {useState, useEffect, useCallback} from 'react'
import axios from 'axios'

function useGif(tag) {
    const [gif, setGif] = useState('')

    const API_KEY = process.env.REACT_APP_API_KEY
    
    const fetchGif = useCallback(async (tag) => {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
        const res = await axios.get(tag ? `${url}&tag=${tag}` : url)
        const data = res.data
        const image_url = data.data.images.downsized_large.url
        console.log('rendering : ',image_url)
        setGif(image_url)
    }, [API_KEY])
    
    useEffect(() => {
        fetchGif(tag)
    }, [fetchGif,tag])

    return {gif, fetchGif}
}

export default useGif
