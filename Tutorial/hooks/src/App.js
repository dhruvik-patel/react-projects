import './App.css'
import React from 'react'
import FetchDataTwo from './fetchDataComponents/FetchDataOne'

function App() {

  return (
      <div className="App">
        <FetchDataTwo />
      </div>
  );
}

export default App;







// // This is for useReducer Common Counter
// import ComponentA from './useReducerComponents/ComponentA'
// import ComponentB from './useReducerComponents/ComponentB'
// export const CountContext = React.createContext()

// const initialState = 0
// const reducer = (state,action) => {
//   switch(action){
//     case 'increment':
//       return state+1
//     case 'decrement':
//       return state-1
//     case 'reset':
//       return initialState
//     default:
//       return state
//   }
// }

// function App() {

//   const [count, dispatch] = useReducer(reducer, initialState)
//   return (
//     <CountContext.Provider value={{ countContext: count, countDispatch: dispatch }}>
//         <div className="App">
//           Count : {count}
//           <ComponentA />
//           <ComponentB />
//         </div>
//     </CountContext.Provider>
 
//   );
// }

// export default App;
