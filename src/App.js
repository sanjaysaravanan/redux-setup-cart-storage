import { Provider } from 'react-redux';
import DecrementCart from './Cart/DecrementCart';
import IncrementCart from './Cart/IncrementCart';
import ShowCart from './Cart/ShowCart';
import Decrement from './Decrement';
import Increment from './Increment';
import DecrementScore from './Score/DecrementScore';
import IncrementScore from './Score/IncrementScore';
import ShowScore from './Score/ShowScore';
import ShowCount from './ShowCount';

import ReduxStore from './store/store';

function App() {
  var count = 0;

  return (
    <div>
      <Provider store={ReduxStore} >
        <div className="App">
          <h2>Count</h2>
          <Increment />
          <ShowCount />
          <Decrement />
        </div>
        <div className="App">
          <h2>Cart</h2>
          <IncrementCart />
          <ShowCart />
          <DecrementCart />
        </div>
        <div className="App">
          <h2>Score</h2>
          <IncrementScore />
          <ShowScore />
          <DecrementScore />
        </div>
      </Provider>
    </div>

  );
}


export default App;