import React from 'react'
import Card from './Card'
import './static/styles.css'

const CardList = () => {
    return (
        <div className='container flex flex-col align-center gap-10 justify-center pt-20'>
            <div className='text-center font-black font-sans text-3xl tracking-widest'>Card Created By Me</div>
            <div className='flex flex-row flex-wrap gap-5 justify-center mt-20'>
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default CardList
