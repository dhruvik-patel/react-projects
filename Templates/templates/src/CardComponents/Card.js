import React from 'react'
import cardImage from './static/side.png'

const Card = () => {
    return (
        <div className='container flex flex-col overflow-hidden w-64 rounded-lg'>
            
            <img className='object-cover h-40' src={cardImage} alt=""/>
            
            <div className='container flex flex-col p-5 bg-yellow-200'>
                <h2 className='font-bold font-sans text-xl tracking-wider mb-2'>Card Header</h2>
                <p className='font-light text-sm mb-2'>Location</p>
                <p className='font-normal font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eum, sapiente vel. Obcaecati aspernatur nesciunt debitis 
                    expedita hic dolorum, in natus</p>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5'>Read More</button>
            </div>
        </div>
    )
}

export default Card
