import React from 'react';

import { useDispatch } from 'react-redux';

function IncrementCart() {

  const dispatch = useDispatch();

  const addToCartFunc = async (data) => {
    dispatch({ type: 'set-loading' });
    const response = await fetch(
      'https://63f9bdce897af748dcc2d723.mockapi.io/items',
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      }
    );
    const item = await response.json();
    dispatch({ type: 'add-to-cart', payload: item })
  }

  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault();

        const data = {};
        Array.from(e.target.elements).map((element) => {
          if (element.nodeName === 'INPUT') {
            data[element.name] = element.value;
          }
        })

        addToCartFunc(data);

      }} >
        <input name='name' placeholder='Enter name' />
        <input name='quantity' type={'number'} placeholder="Enter QTY" />
        <input name='price' type={'number'} placeholder="Enter Price" />
        <input name='image' type={'url'} placeholder="Enter Image Url" />
        <button type="submit" >Submit</button>
      </form>

    </>
    // <button onClick={() => {
    //   addToCartFunc()
    // }} >+</button>

  )
}

export default IncrementCart;