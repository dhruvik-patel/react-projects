import React, {useState, useEffect} from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import useStyles from './styles'
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../../actions/posts'

// Get Current Id from Post using App as parent
const Form = ({currentId, setCurrentId}) => {
    
    const [postData,setPostData] = useState({ creator:'', title:'', message:'', tags:'', selectedFile:'' })
    const post = useSelector((state) => currentId ? state.posts.find(post => post._id===currentId) : null)
    const classes = useStyles()
    const dispatch = useDispatch()
    
    useEffect(() => {
        if(post)
            setPostData(post)
    },[post])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(currentId){
            dispatch(updatePost(currentId, postData))
        }
        else{
            dispatch(createPost(postData))
        }
        clear()
    }

    const clear = () => {
        setCurrentId(null)
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' })
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Editing' :'Creating' } Memories</Typography>
                <TextField 
                    value={ postData.creator } 
                    onChange={ (e) => setPostData({...postData, creator:e.target.value})} 
                    name="creator" variant="outlined" label="creator" fullWidth></TextField>
                <TextField
                    value={postData.title}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                    name="title" variant="outlined" label="title" fullWidth></TextField>
                <TextField
                    value={postData.message}
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                    name="message" variant="outlined" label="message" fullWidth></TextField>
                <TextField
                    value={postData.tags}
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
                    name="tags" variant="outlined" label="tags" fullWidth></TextField>
                <div className={classes.fileInput}>
                    <FileBase 
                        type="file"
                        multiple={false}
                        onDone = { ({base64}) => setPostData({...postData, selectedFile: base64 })}
                    />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>
                    Submit
                </Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>
                    Clear
                </Button>

            </form>
        </Paper>
    )
}

export default Form
