import React from 'react'
import Link from 'next/link'

const indexError = () => {
    return (
        <div>
            <h1>Page does not exist</h1>
            <p>Please, <Link href='/'><a>Go back</a></Link></p>
            <style jsx>{`
                div{
                    text-align: center;
                    border: 2px solid #ccc;
                    padding: 20px;
                    margin: 10px;
                }
                h1{
                    color: salmon;
                }
            `}</style>
        </div>
    )
}

export default indexError
