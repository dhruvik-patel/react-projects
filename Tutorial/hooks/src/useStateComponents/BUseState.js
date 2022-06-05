import React, { useState } from 'react'

function BUseState() {

    const initial = 0
    // useState takes initial value and returns [current value, function to change current value] array.
    const [count, setCount] = useState(initial)

    const incrementFive = () => {
        for(let i=0;i<5;i++){
            setCount(prevState =>prevState+1)
        }
    }

    return (
        <div>
            {/* <button onClick={() => setCount(count+1) }>{count} clicked</button> */}

            <h3>Count : {count}</h3>
            <button onClick={() => setCount(prevState => prevState + 1)}>Increment</button>
            <button onClick={() => setCount(prevState => prevState - 1)}>Decrement</button>
            <button onClick={incrementFive}>Plus Five</button>
        </div>
    )
}

export default BUseState
