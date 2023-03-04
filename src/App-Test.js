import logo from './logo.svg';
import './App.css';

import { useReducer, useContext, useState, createContext } from 'react';

const initialState = {
  count: 0,
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'inc':
      return { ...state, count: state.count + 1 }
    case 'dec':
      return { ...state, count: state.count - 1 }
    default:
      return state;
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  // const [state, setState] = useState({ count: 0 });

  return (
    <div className="App">
      <IncrementComp dispatch={dispatch} />
      <ShowCount state={state} />
      <DecrementComp dispatch={dispatch} />
    </div>
  );
}


function IncrementComp({ dispatch }) {
  return (
    <button onClick={() => {
      dispatch({ type: 'inc' })
    }} >+</button>
  )
}

function ShowCount({ state }) {
  return (
    <h1>{state.count}</h1>
  )
}

function DecrementComp({ dispatch }) {
  return (
    <button onClick={() => {
      dispatch({ type: 'dec' })
    }} >-</button>
  )
}

// const CounterContext = createContext(initialState);


// function App() {

//   const [state, setState] = useState({
//     count: 0,
//   });

//   const changeState = (currState) => {
//     setState(currState)
//   }

//   return (
//     <CounterContext.Provider value={{ state, changeState }}>
//       <div>
//         <IncrementComp />
//         <ShowCount />
//         <DecrementComp />
//       </div>
//     </CounterContext.Provider>
//   )
// }

// function IncrementComp() {
//   const { state, changeState } = useContext(CounterContext);
//   return (
//     <button onClick={() => {
//       changeState({ count: state.count + 1 });
//     }} >+</button>
//   )
// }

// function ShowCount() {
//   const { state } = useContext(CounterContext);
//   return (
//     <h1>{state.count}</h1>
//   )
// }

// function DecrementComp() {
//   const { state, changeState } = useContext(CounterContext);
//   return (
//     <button onClick={() => {
//       changeState({ count: state.count - 1 });
//     }} >-</button>
//   )
// }






export default App;
