import * as api from '../api'

// Action Creators
// const getPosts = () => {
//     const action = { type:'FETCH_ALL', payload=[] }
//     return action
// }

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts()
        
        dispatch({ type:'FETCH_ALL', payload: data })
    } catch (error) {
        console.log(error)
    }
} 

export const createPost = (post) => async (dispatch) => {
    try {
        const {data} = await api.createPost(post)
        dispatch({ type: 'CREATE', payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const updatePost = (id, updatedPost) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, updatedPost)
        dispatch({ type: 'UPDATE', payload: data })
    } catch (err) {
        console.log(err)
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id)
        
        dispatch({ type: 'DELETE', payload: id })
    } catch (err) {
        console.log(err)
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const {data} = await api.likePost(id)
        dispatch({ type: 'UPDATE', payload:data })
    } catch (err) {
        console.log(err)
    }
}