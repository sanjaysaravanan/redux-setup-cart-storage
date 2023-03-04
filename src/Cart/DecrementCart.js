import React from 'react';

import { useDispatch } from 'react-redux';

function DecrementCart() {

  const dispatch = useDispatch();

  return (
    <button onClick={() => {
      dispatch({ type: 'remove-from-cart' })
    }} >-</button>
  )
}

export default DecrementCart;