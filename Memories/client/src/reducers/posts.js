// const reducer = (state, action) => {
//     switch(action.type){
//         case 'FETCH_ALL':
//             return state
//     }
// }

// from actions, {type: '', payload:data} is returned
const reducer = (posts = [], action) => {
    switch (action.type) {
        case 'DELETE':
            return posts.filter(post => post._id !== action.payload)
        case 'UPDATE':
            return posts.map(post => post._id===action.payload._id ? action.payload : post)
        case 'FETCH_ALL':
            return action.payload
        case 'CREATE':
            return [...posts, action.payload]
        default:
            return posts
    }
}

// this data can be available throughout project (here in Posts/Posts.js)
export default reducer