import React, { useState, useEffect } from 'react'

function UseEffectTitle() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Clicked ${count}`
    })

    return (
        <div>
            <h5>Check Title for click count</h5>
            <button onClick={() => setCount(count+1)}>  {count}  </button>
        </div>
    )
}

export default UseEffectTitle
