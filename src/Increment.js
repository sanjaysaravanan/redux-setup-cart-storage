import React from 'react';
import { useDispatch } from 'react-redux';

function Increment() {
  const dispatch = useDispatch();
  return (
    <button onClick={() => {
      dispatch({ type: 'increment' })
    }} >+</button>
  )
}

export default Increment;