import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

function ShowScore() {

  const state = useSelector((state) => state.scoreObj);
  const dispatch = useDispatch();

  return (
    <>
      <h1>{state.score}</h1>
      <button onClick={() => {
        dispatch({ type: 'reset-score' })
      }}>Reset</button>
    </>
  )
};

export default ShowScore;