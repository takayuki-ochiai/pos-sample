import { combineReducers } from 'redux';
import routerReducer from './router';
import routerTransition from './routerTransition';
import categories from './categories';

const App = combineReducers({
  routing: routerReducer,
  routerTransition,
  categories,
});

export default App;
