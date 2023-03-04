import React from 'react';

import { useSelector } from 'react-redux';

function ShowCount() {

  const state = useSelector((state) => state.countObj);

  return (
    <h1>{state.count}</h1>
  )
};

export default ShowCount;