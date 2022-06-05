import React,{ useState } from 'react'
import useGif from '../hooks/useGif'

function TaggedGIF() {
    const [tag, setTag] = useState('dog')
    const { gif, fetchGif } = useGif(tag)

    return (
        <div className='taggedMain'>
            <h2 className='heading'>GIF for {tag}</h2>
            <img src={gif} alt="" />
            <div className='btnDiv'>
                <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} />
                <button onClick={() => fetchGif(tag)}>Generate New</button>
            </div>
        </div>
    )
}

export default TaggedGIF
