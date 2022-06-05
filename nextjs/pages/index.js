import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

const indexHome = () => {
    return (
        <div>
            <h1>This is Home Page</h1>
            <p>Go to <Link href='/about'><a>About</a></Link></p>
            <button onClick={() => { Router.push('/about')}}>Go to About</button>
        </div>
    )
}

export default indexHome
