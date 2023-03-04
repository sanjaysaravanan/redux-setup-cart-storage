import React from 'react';

import { useDispatch } from 'react-redux';

function IncrementScore() {

  const dispatch = useDispatch();

  return (
    <button onClick={() => {
      dispatch({ type: 'inc-score', payload: 10 })
    }} >+</button>
  )
}

export default IncrementScore;