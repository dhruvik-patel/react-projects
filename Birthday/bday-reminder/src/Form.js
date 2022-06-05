import React,{ useState } from 'react'
import { createPost } from './api/index'

const Form = () => {
    const [data, setData] = useState({name:'', bdate:''})


    const handleSubmit = async (e) => {
        e.preventDefault()

        if (data) {
            console.log(data)
            createPost(data)
            setData({name:'',bdate:''})
        }
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text" name='name' value={data.name} onChange={(e) => setData({...data, name:e.target.value})} required/>
                <label htmlFor="bdate">Birth Date: </label>
                <input type="date" name="bdate" value={data.bdate} onChange={(e) => setData({ ...data, bdate: e.target.value })} required/>
                <input type="submit" value='Add' />
            </form>
        </div>
    )
}

export default Form
