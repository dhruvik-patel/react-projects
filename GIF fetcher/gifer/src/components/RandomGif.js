import React from 'react'
import useGif from '../hooks/useGif'

function RandomGif() {

    const { gif, fetchGif} = useGif()

    return (
        <div className="randomMain">
            <h2 className='heading'>Randomly Generated GIF</h2>
            <img src={gif} alt=""/>
            <div className='btnDiv'>
                <button onClick={fetchGif}>Generate New</button>
            </div>
        </div>
    )
}

export default RandomGif
