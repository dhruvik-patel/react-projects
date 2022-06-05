import React, { useState } from 'react'

function CUseState() {

    const [name, setName] = useState({ fname: '', lname: '' })
    return (
        <div>
            <input 
                type="text" 
                value={name.fname} 
                onChange={e => setName({ ...name, fname: e.target.value })} 
            />

            <input 
                type="text" 
                value={name.lname}
                onChange = {e => setName({...name, lname:e.target.value})}    
            />

            <h5>Your name is : "{name.fname} {name.lname}"</h5>
        </div>
    )
}

export default CUseState
