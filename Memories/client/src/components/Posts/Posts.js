import React from 'react'
import { useSelector } from 'react-redux'
import { Grid, CircularProgress } from '@material-ui/core'
import Post from './Post/Post'
import useStyles from './styles'

const Posts = ({ setCurrentId}) => {
    // this is how to fetch data using redux
    const posts = useSelector((state) => state.posts)
    const classes = useStyles()
    
    console.log(posts)
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid container className={classes.container} alignItems='stretch' spacing={3}>
                {
                    posts.map((post) => (
                        <Grid item key={post._id} xs={12} sm={6} >
                            <Post post={post} setCurrentId={setCurrentId}/>
                        </Grid>
                    ))
                }
            </Grid>
        )
    )
}

export default Posts
