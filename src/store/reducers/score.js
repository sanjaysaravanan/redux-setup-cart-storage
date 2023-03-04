// Counter Reducer
const initialState = {
  score: 0,
}
function ScoreReducer(state = initialState, action) {
  switch (action.type) {
    case 'inc-score':
      return { ...state, score: state.score + action.payload };
    case 'dec-score':
      return { ...state, score: state.score - action.payload };
    case 'reset-score':
      return { ...state, score: 0 };
    default:
      return state;
  }
}

export default ScoreReducer;