import React from 'react';

import { useDispatch } from 'react-redux';

function DecrementScore() {

  const dispatch = useDispatch();

  return (
    <button onClick={() => {
      dispatch({ type: 'dec-score', payload: 5 })
    }} >-</button>
  )
}

export default DecrementScore;