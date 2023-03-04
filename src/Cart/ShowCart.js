import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import FontAwesomeIcon from '@fortawesome/fontawesome-free';

function ShowCart() {

  const state = useSelector((state) => state.cartObj);
  const dispatch = useDispatch();

  const getCartData = async () => {
    dispatch({ type: 'set-loading' })
    const response = await fetch('https://63f9bdce897af748dcc2d723.mockapi.io/items');
    const cartItems = await response.json();
    dispatch({ type: 'load-cart-data', payload: cartItems });
  }

  useEffect(() => {
    getCartData();
  }, []);

  return (
    <>
      {state.isLoading ? <i class="fa-solid fa-spinner fa-spin"></i> : (
        <>
          {state.cart.map(({ name }) => (
            <h1 key={name} >{name}</h1>
          ))}
        </>
      )}

    </>
  )
};

export default ShowCart;