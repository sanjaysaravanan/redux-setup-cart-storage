import React from 'react';

import { useDispatch } from 'react-redux';

function Decrement() {

  const dispatch = useDispatch();

  return (
    <button onClick={() => {
      dispatch({ type: 'decrement' })
    }} >-</button>
  )
}

export default Decrement;