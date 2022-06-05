import React, { useEffect, useState } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { getPosts } from './actions/posts'
import memories from './images/memories.png'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import useStyles from './styles'

// we want to use id in form but we can get it from post
// So, we create state here because we have both Form and Posts in App
// We pass setId to Form and Post. and from Post we set id and use in form

const App = () => {

    const [currentId, setCurrentId] = useState(null)
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [currentId, dispatch])

    return (
        <Container maxWidth="lg">
            <AppBar position="static" color="inherit" className={classes.appBar}>
                <Typography variant="h3" align="center" className={classes.heading}>
                    Memories
                </Typography>
                <img src={memories} alt="Memories" height="45" className={classes.image}/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container className={classes.mainContainer} justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form setCurrentId={setCurrentId} currentId={currentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App