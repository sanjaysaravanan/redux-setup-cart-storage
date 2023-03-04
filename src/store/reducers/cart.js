// Counter Reducer
const initialState = {
  cart: [],
  isLoading: false,
}
function CartReducer(state = initialState, action) {
  switch (action.type) {
    case 'load-cart-data':
      return { ...state, cart: action.payload, isLoading: false }
    case 'set-loading':
      return { ...state, isLoading: true };
    case 'add-to-cart':
      return {
        ...state,
        cart: [...state.cart, action.payload],
        isLoading: false
      };
    case 'remove-from-cart':
      const oldCart = [...state.cart];
      oldCart.pop();
      return { ...state, cart: oldCart };
    default:
      return state;
  }
}

export default CartReducer;