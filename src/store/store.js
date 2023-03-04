// Using reduxjs toolkit
import { configureStore } from '@reduxjs/toolkit';
import CartReducer from './reducers/cart';

import CountReducer from './reducers/count';
import ScoreReducer from './reducers/score';

const store = configureStore({
  reducer: {
    countObj: CountReducer,
    cartObj: CartReducer,
    scoreObj: ScoreReducer
  }
});

store.subscribe(() => console.log(store.getState()));

export default store;