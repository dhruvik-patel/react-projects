import React,{useState} from 'react'

function AUseState() {

    const initial = 0
    // useState takes initial value and returns [current value, function to change current value] array.
    const [count, setCount] = useState(initial)

    return (
        <div>
            {/* <button onClick={() => setCount(count+1) }>{count} clicked</button> */}
            <button onClick={() => setCount(prevState => prevState + 1)}>{count} clicked</button>
        </div>
    )
}

export default AUseState
